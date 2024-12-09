import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Res,
  HttpCode,
  Get,
  Req,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import * as bcrypt from "bcryptjs";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { Response } from "express";

export interface CustomRequest extends Request {
  cookies: { [key: string]: string };
}

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @ApiOperation({ summary: "Créer un nouvel administrateur" })
  @ApiResponse({ status: 201, description: "Administrateur créé avec succès." })
  async register(@Body() registerDto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registerDto.mot_de_passe, 10);
    return this.authService.register({
      ...registerDto,
      mot_de_passe: hashedPassword,
    });
  }

  @Post("login")
@HttpCode(200)
@ApiOperation({ summary: "Se connecter" })
@ApiResponse({ status: 200, description: "Connexion réussie." })
@ApiResponse({ status: 401, description: "Identifiants invalides ou compte inactif." })
async login(
  @Body() loginDto: LoginDto,
  @Res({ passthrough: true }) res: Response
) {
  const user = await this.authService.validateUser(
    loginDto.email,
    loginDto.mot_de_passe
  );

  if (!user) {
    throw new UnauthorizedException("Identifiants invalides");
  }

  // Vérifier le statut de l'utilisateur
  if (user.status === "inactive") {
    throw new UnauthorizedException("Votre compte est inactif. Veuillez contacter l’administrateur.");
  }

  const { accessToken, refreshToken } = await this.authService.login(user);

  res.cookie("access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000, // 1 jour
  });

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours
  });

  return { message: "Connexion réussie" };
}


  @Post("refresh")
  @ApiOperation({ summary: "Rafraîchir le token d'accès" })
  @ApiResponse({ status: 200, description: "Token rafraîchi avec succès." })
  @ApiResponse({
    status: 401,
    description: "Token de rafraîchissement invalide.",
  })
  async refresh(
    @Req() req: CustomRequest,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken = req.cookies['refresh_token'];
  
    if (!refreshToken) {
      throw new UnauthorizedException('Aucun token de rafraîchissement fourni.');
    }
  
    const { accessToken } = await this.authService.refreshToken(refreshToken); // Déstructuration ici pour récupérer le token
  
    // Définir le cookie avec le bon format (une simple chaîne, pas un objet)
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Assurez-vous que HTTPS est activé en production
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 1 jour
    });
  
    return { message: 'Token rafraîchi avec succès' };
  }

  @Post("logout")
  @HttpCode(200)
  @ApiOperation({ summary: "Se déconnecter" })
  @ApiResponse({ status: 200, description: "Déconnexion réussie." })
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie("access_token");
    res.clearCookie("refresh_token");
    return { message: "Déconnexion réussie" };
  }

  @Get("me")
  @HttpCode(200)
  @ApiOperation({ summary: "Récupérer les informations de l'utilisateur" })
  @ApiResponse({
    status: 200,
    description: "Informations utilisateur récupérées avec succès.",
  })
  async getUserInfo(@Req() req: CustomRequest) {
    const accessToken = req.cookies["access_token"];
    if (!accessToken) {
      throw new UnauthorizedException("Token manquant dans les cookies.");
    }

    const user = await this.authService.getUserFromAccessToken(accessToken);
    const { id, nom, prenom, email, role, status } = user;

    return { id ,nom, prenom, email, role, status };
  }
}
