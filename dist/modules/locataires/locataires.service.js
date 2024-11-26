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
exports.LocatairesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const locataire_model_1 = require("../../models/locataire.model");
let LocatairesService = class LocatairesService {
    constructor(locataireModel) {
        this.locataireModel = locataireModel;
    }
    async create(createLocataireDto) {
        return this.locataireModel.create({
            ...createLocataireDto,
            date_creation: new Date(),
        });
    }
    async findAll() {
        return this.locataireModel.findAll({
            include: ['baux'],
        });
    }
    async findOne(id) {
        const locataire = await this.locataireModel.findByPk(id, {
            include: ['baux'],
        });
        if (!locataire) {
            throw new common_1.NotFoundException(`Locataire avec l'ID ${id} non trouvé`);
        }
        return locataire;
    }
    async update(id, updateLocataireDto) {
        const locataire = await this.findOne(id);
        await locataire.update({
            ...updateLocataireDto,
            date_mise_a_jour: new Date(),
        });
        return locataire;
    }
    async remove(id) {
        const locataire = await this.findOne(id);
        await locataire.destroy();
    }
};
exports.LocatairesService = LocatairesService;
exports.LocatairesService = LocatairesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(locataire_model_1.Locataire)),
    __metadata("design:paramtypes", [Object])
], LocatairesService);
//# sourceMappingURL=locataires.service.js.map