import { JwtService } from '@nestjs/jwt';
import { Administrateur } from '../models/administrateur.model';
import { ConfigService } from '@nestjs/config';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private administrateurModel;
    private jwtService;
    private configService;
    constructor(administrateurModel: typeof Administrateur, jwtService: JwtService, configService: ConfigService);
    validateUser(email: string, password: string): Promise<any>;
    register(registerDto: RegisterDto): Promise<any>;
    login(user: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken(refreshToken: string): Promise<{
        accessToken: string;
    }>;
    logout(userId: number): Promise<{
        message: string;
    }>;
    getUserFromAccessToken(accessToken: string): Promise<any>;
}
