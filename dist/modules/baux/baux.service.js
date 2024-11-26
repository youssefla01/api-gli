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
exports.BauxService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const bail_model_1 = require("../../models/bail.model");
let BauxService = class BauxService {
    constructor(bailModel) {
        this.bailModel = bailModel;
    }
    async create(createBailDto) {
        return this.bailModel.create({
            ...createBailDto,
            date_creation: new Date(),
        });
    }
    async findAll() {
        return this.bailModel.findAll({
            include: ['bien', 'locataire', 'proprietaire', 'paiements'],
        });
    }
    async findOne(id) {
        const bail = await this.bailModel.findByPk(id, {
            include: ['bien', 'locataire', 'proprietaire', 'paiements'],
        });
        if (!bail) {
            throw new common_1.NotFoundException(`Bail avec l'ID ${id} non trouvé`);
        }
        return bail;
    }
    async update(id, updateBailDto) {
        const bail = await this.findOne(id);
        await bail.update({
            ...updateBailDto,
            date_mise_a_jour: new Date(),
        });
        return bail;
    }
    async remove(id) {
        const bail = await this.findOne(id);
        await bail.destroy();
    }
    async findByProprietaire(proprietaireId) {
        return this.bailModel.findAll({
            where: { proprietaire_id: proprietaireId },
            include: ['bien', 'locataire', 'paiements'],
        });
    }
    async findByLocataire(locataireId) {
        return this.bailModel.findAll({
            where: { locataire_id: locataireId },
            include: ['bien', 'proprietaire', 'paiements'],
        });
    }
    async findByBien(bienId) {
        return this.bailModel.findAll({
            where: { bien_id: bienId },
            include: ['locataire', 'proprietaire', 'paiements'],
        });
    }
};
exports.BauxService = BauxService;
exports.BauxService = BauxService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(bail_model_1.Bail)),
    __metadata("design:paramtypes", [Object])
], BauxService);
//# sourceMappingURL=baux.service.js.map