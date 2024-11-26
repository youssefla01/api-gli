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
exports.PaiementsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const paiement_model_1 = require("../../models/paiement.model");
const sequelize_2 = require("sequelize");
let PaiementsService = class PaiementsService {
    constructor(paiementModel) {
        this.paiementModel = paiementModel;
    }
    async create(createPaiementDto) {
        return this.paiementModel.create({
            ...createPaiementDto,
            date_creation: new Date(),
        });
    }
    async findAll() {
        return this.paiementModel.findAll({
            include: ['bail'],
        });
    }
    async findOne(id) {
        const paiement = await this.paiementModel.findByPk(id, {
            include: ['bail'],
        });
        if (!paiement) {
            throw new common_1.NotFoundException(`Paiement avec l'ID ${id} non trouvé`);
        }
        return paiement;
    }
    async update(id, updatePaiementDto) {
        const paiement = await this.findOne(id);
        await paiement.update({
            ...updatePaiementDto,
            date_mise_a_jour: new Date(),
        });
        return paiement;
    }
    async remove(id) {
        const paiement = await this.findOne(id);
        await paiement.destroy();
    }
    async findByBail(bailId) {
        return this.paiementModel.findAll({
            where: { bail_id: bailId },
            include: ['bail'],
        });
    }
    async findByPeriode(debut, fin) {
        return this.paiementModel.findAll({
            where: {
                date_paiement: {
                    [sequelize_2.Op.between]: [debut, fin],
                },
            },
            include: ['bail'],
        });
    }
};
exports.PaiementsService = PaiementsService;
exports.PaiementsService = PaiementsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(paiement_model_1.Paiement)),
    __metadata("design:paramtypes", [Object])
], PaiementsService);
//# sourceMappingURL=paiements.service.js.map