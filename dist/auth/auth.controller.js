"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const bcrypt = require("bcryptjs");
const login_dto_1 = require("./dto/login.dto");
const register_dto_1 = require("./dto/register.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(registerDto) {
        const hashedPassword = await bcrypt.hash(registerDto.mot_de_passe, 10);
        return this.authService.register({
            ...registerDto,
            mot_de_passe: hashedPassword,
        });
    }
    async login(loginDto, res) {
        const user = await this.authService.validateUser(loginDto.email, loginDto.mot_de_passe);
        if (!user) {
            throw new common_1.UnauthorizedException("Identifiants invalides");
        }
        const { accessToken, refreshToken } = await this.authService.login(user);
        res.cookie("access_token", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return { message: "Connexion réussie" };
    }
    async refresh(req, res) {
        const refreshToken = req.cookies['refresh_token'];
        if (!refreshToken) {
            throw new common_1.UnauthorizedException('Aucun token de rafraîchissement fourni.');
        }
        const { accessToken } = await this.authService.refreshToken(refreshToken);
        res.cookie('access_token', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000,
        });
        return { message: 'Token rafraîchi avec succès' };
    }
    async logout(res) {
        res.clearCookie("access_token");
        res.clearCookie("refresh_token");
        return { message: "Déconnexion réussie" };
    }
    async getUserInfo(req) {
        const accessToken = req.cookies["access_token"];
        if (!accessToken) {
            throw new common_1.UnauthorizedException("Token manquant dans les cookies.");
        }
        const user = await this.authService.getUserFromAccessToken(accessToken);
        const { id, nom, prenom, email, role } = user;
        return { id, nom, prenom, email, role };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("register"),
    (0, swagger_1.ApiOperation)({ summary: "Créer un nouvel administrateur" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Administrateur créé avec succès." }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)("login"),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: "Se connecter" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Connexion réussie." }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Identifiants invalides." }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("refresh"),
    (0, swagger_1.ApiOperation)({ summary: "Rafraîchir le token d'accès" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Token rafraîchi avec succès." }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: "Token de rafraîchissement invalide.",
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)("logout"),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: "Se déconnecter" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Déconnexion réussie." }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)("me"),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: "Récupérer les informations de l'utilisateur" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Informations utilisateur récupérées avec succès.",
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getUserInfo", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)("auth"),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map