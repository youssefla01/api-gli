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
exports.ProprietairesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const proprietaire_model_1 = require("../../models/proprietaire.model");
let ProprietairesService = class ProprietairesService {
    constructor(proprietaireModel) {
        this.proprietaireModel = proprietaireModel;
    }
    async create(createProprietaireDto) {
        return this.proprietaireModel.create({
            ...createProprietaireDto,
            date_creation: new Date(),
        });
    }
    async findAll() {
        return this.proprietaireModel.findAll({
            include: ['biens', 'releves'],
        });
    }
    async findOne(id) {
        const proprietaire = await this.proprietaireModel.findByPk(id, {
            include: ['biens', 'releves'],
        });
        if (!proprietaire) {
            throw new common_1.NotFoundException(`Propriétaire avec l'ID ${id} non trouvé`);
        }
        return proprietaire;
    }
    async update(id, updateProprietaireDto) {
        const proprietaire = await this.findOne(id);
        await proprietaire.update({
            ...updateProprietaireDto,
            date_mise_a_jour: new Date(),
        });
        return proprietaire;
    }
    async remove(id) {
        const proprietaire = await this.findOne(id);
        await proprietaire.destroy();
    }
};
exports.ProprietairesService = ProprietairesService;
exports.ProprietairesService = ProprietairesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(proprietaire_model_1.Proprietaire)),
    __metadata("design:paramtypes", [Object])
], ProprietairesService);
//# sourceMappingURL=proprietaires.service.js.map