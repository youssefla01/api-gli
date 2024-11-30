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

    // Génération des tokens
    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('jwt.accessSecret'),
      expiresIn: this.configService.get('jwt.accessExpiresIn'),
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get('jwt.refreshSecret'),
      expiresIn: this.configService.get('jwt.refreshExpiresIn'),
    });

    // Mise à jour du dernier login
    await this.administrateurModel.update(
      { dernier_login: new Date() },
      { where: { id: user.id } },
    );

    // Retourne uniquement les tokens, les cookies seront gérés côté contrôleur
    return { accessToken, refreshToken };
  }
  async refreshToken(refreshToken: string) {
    try {
      // Valider le refresh token
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get('jwt.refreshSecret'),
      });
  
      // Vérifier l'utilisateur dans la base de données
      const user = await this.administrateurModel.findByPk(payload.sub);
      if (!user) {
        throw new UnauthorizedException('Utilisateur non trouvé.');
      }
  
      // Générer un nouveau token d'accès
      const newPayload = { email: user.email, sub: user.id, role: user.role };
      const accessToken = this.jwtService.sign(newPayload, {
        secret: this.configService.get('jwt.accessSecret'),
        expiresIn: this.configService.get('jwt.accessExpiresIn'),
      });
  
      console.log("access token", accessToken); // Affichez le token pour vérification
  
      // Retourner un objet contenant seulement le token
      return { accessToken };
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Le token de rafraîchissement a expiré.');
      }
      throw new UnauthorizedException('Token de rafraîchissement invalide.');
    }
  }


  async logout(userId: number) {
    // Optionnel : Mettre à jour une colonne `refreshTokenInvalidatedAt` dans la table Administrateur
    await this.administrateurModel.update(
      { refreshTokenInvalidatedAt: new Date() },
      { where: { id: userId } },
    );

    return { message: 'Déconnexion réussie.' };
  }

  async getUserFromAccessToken(accessToken: string) {
    try {
      const payload = this.jwtService.verify(accessToken, {
        secret: this.configService.get('jwt.accessSecret'),
      });
  
      const user = await this.administrateurModel.findByPk(payload.sub);
  
      if (!user) {
        throw new UnauthorizedException('Utilisateur non trouvé.');
      }
  
      const { mot_de_passe, ...result } = user.toJSON(); // Exclure le mot de passe
      return result;
    } catch (error) {
      throw new UnauthorizedException('Token invalide ou expiré.');
    }
  }
  
}
