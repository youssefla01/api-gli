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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const sequelize_1 = require("@nestjs/sequelize");
const administrateur_model_1 = require("../models/administrateur.model");
const bcrypt = require("bcryptjs");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(administrateurModel, jwtService, configService) {
        this.administrateurModel = administrateurModel;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async validateUser(email, password) {
        const user = await this.administrateurModel.findOne({ where: { email } });
        if (user && (await bcrypt.compare(password, user.mot_de_passe))) {
            const { mot_de_passe, ...result } = user.toJSON();
            return result;
        }
        return null;
    }
    async register(registerDto) {
        const existingUser = await this.administrateurModel.findOne({
            where: { email: registerDto.email },
        });
        if (existingUser) {
            throw new common_1.UnauthorizedException('Cet email est déjà utilisé');
        }
        const user = await this.administrateurModel.create({
            ...registerDto,
            role: 'Admin',
            date_creation: new Date(),
        });
        const { mot_de_passe, ...result } = user.toJSON();
        return result;
    }
    async login(user) {
        const payload = { email: user.email, sub: user.id, role: user.role };
        const accessToken = this.jwtService.sign(payload, {
            secret: this.configService.get('jwt.accessSecret'),
            expiresIn: this.configService.get('jwt.accessExpiresIn'),
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: this.configService.get('jwt.refreshSecret'),
            expiresIn: this.configService.get('jwt.refreshExpiresIn'),
        });
        await this.administrateurModel.update({ dernier_login: new Date() }, { where: { id: user.id } });
        return { accessToken, refreshToken };
    }
    async refreshToken(refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken, {
                secret: this.configService.get('jwt.refreshSecret'),
            });
            const user = await this.administrateurModel.findByPk(payload.sub);
            if (!user) {
                throw new common_1.UnauthorizedException('Utilisateur non trouvé.');
            }
            const newPayload = { email: user.email, sub: user.id, role: user.role };
            const accessToken = this.jwtService.sign(newPayload, {
                secret: this.configService.get('jwt.accessSecret'),
                expiresIn: this.configService.get('jwt.accessExpiresIn'),
            });
            console.log("access token", accessToken);
            return { accessToken };
        }
        catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new common_1.UnauthorizedException('Le token de rafraîchissement a expiré.');
            }
            throw new common_1.UnauthorizedException('Token de rafraîchissement invalide.');
        }
    }
    async logout(userId) {
        await this.administrateurModel.update({ refreshTokenInvalidatedAt: new Date() }, { where: { id: userId } });
        return { message: 'Déconnexion réussie.' };
    }
    async getUserFromAccessToken(accessToken) {
        try {
            const payload = this.jwtService.verify(accessToken, {
                secret: this.configService.get('jwt.accessSecret'),
            });
            const user = await this.administrateurModel.findByPk(payload.sub);
            if (!user) {
                throw new common_1.UnauthorizedException('Utilisateur non trouvé.');
            }
            const { mot_de_passe, ...result } = user.toJSON();
            return result;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Token invalide ou expiré.');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(administrateur_model_1.Administrateur)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map