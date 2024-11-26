import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { Administrateur } from '../models/administrateur.model';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Administrateur)
    private administrateurModel: typeof Administrateur,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.administrateurModel.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.mot_de_passe))) {
      const { mot_de_passe, ...result } = user.toJSON();
      return result;
    }
    return null;
  }

  async register(registerDto: RegisterDto) {
    const existingUser = await this.administrateurModel.findOne({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new UnauthorizedException('Cet email est déjà utilisé');
    }

    const user = await this.administrateurModel.create({
      ...registerDto,
      role: 'Admin',
      date_creation: new Date(),
    });

    const { mot_de_passe, ...result } = user.toJSON();
    return result;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    
    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('jwt.accessSecret'),
      expiresIn: this.configService.get('jwt.accessExpiresIn'),
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get('jwt.refreshSecret'),
      expiresIn: this.configService.get('jwt.refreshExpiresIn'),
    });

    await this.administrateurModel.update(
      { dernier_login: new Date() },
      { where: { id: user.id } },
    );

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get('jwt.refreshSecret'),
      });

      const user = await this.administrateurModel.findByPk(payload.sub);
      if (!user) {
        throw new UnauthorizedException();
      }

      const newPayload = { email: user.email, sub: user.id, role: user.role };
      return {
        access_token: this.jwtService.sign(newPayload, {
          secret: this.configService.get('jwt.accessSecret'),
          expiresIn: this.configService.get('jwt.accessExpiresIn'),
        }),
      };
    } catch {
      throw new UnauthorizedException();
    }
  }
}