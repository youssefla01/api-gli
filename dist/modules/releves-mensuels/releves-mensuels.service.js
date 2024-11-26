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
exports.RelevesMensuelsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const releve_mensuel_model_1 = require("../../models/releve-mensuel.model");
let RelevesMensuelsService = class RelevesMensuelsService {
    constructor(releveMensuelModel) {
        this.releveMensuelModel = releveMensuelModel;
    }
    async create(createReleveMensuelDto) {
        return this.releveMensuelModel.create({
            ...createReleveMensuelDto,
            date_creation: new Date(),
        });
    }
    async findAll() {
        return this.releveMensuelModel.findAll({
            include: ['proprietaire', 'administrateur'],
        });
    }
    async findOne(id) {
        const releve = await this.releveMensuelModel.findByPk(id, {
            include: ['proprietaire', 'administrateur'],
        });
        if (!releve) {
            throw new common_1.NotFoundException(`Relevé avec l'ID ${id} non trouvé`);
        }
        return releve;
    }
    async update(id, updateReleveMensuelDto) {
        const releve = await this.findOne(id);
        await releve.update(updateReleveMensuelDto);
        return releve;
    }
    async remove(id) {
        const releve = await this.findOne(id);
        await releve.destroy();
    }
    async findByProprietaire(proprietaireId) {
        return this.releveMensuelModel.findAll({
            where: { proprietaire_id: proprietaireId },
            include: ['administrateur'],
        });
    }
    async findByPeriode(mois, annee) {
        return this.releveMensuelModel.findAll({
            where: { mois, annee },
            include: ['proprietaire', 'administrateur'],
        });
    }
};
exports.RelevesMensuelsService = RelevesMensuelsService;
exports.RelevesMensuelsService = RelevesMensuelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(releve_mensuel_model_1.ReleveMensuel)),
    __metadata("design:paramtypes", [Object])
], RelevesMensuelsService);
//# sourceMappingURL=releves-mensuels.service.js.map