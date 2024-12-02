import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { Response } from "express";
export interface CustomRequest extends Request {
    cookies: {
        [key: string]: string;
    };
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<any>;
    login(loginDto: LoginDto, res: Response): Promise<{
        message: string;
    }>;
    refresh(req: CustomRequest, res: Response): Promise<{
        message: string;
    }>;
    logout(res: Response): Promise<{
        message: string;
    }>;
    getUserInfo(req: CustomRequest): Promise<{
        id: any;
        nom: any;
        prenom: any;
        email: any;
        role: any;
        status: any;
    }>;
}
