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
exports.BiensService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const bien_model_1 = require("../../models/bien.model");
const photos_service_1 = require("./photos.service");
const documents_service_1 = require("./documents.service");
;
let BiensService = class BiensService {
    constructor(bienModel, photosService, documentsService) {
        this.bienModel = bienModel;
        this.photosService = photosService;
        this.documentsService = documentsService;
    }
    async create(createBienDto, uploadedPhotos, uploadedDocuments) {
        try {
            const bien = await this.bienModel.create({
                ...createBienDto,
                date_creation: new Date(),
            });
            if (uploadedPhotos?.length) {
                await this.photosService.savePhotos(bien.id, uploadedPhotos);
            }
            if (uploadedDocuments?.length) {
                await this.documentsService.saveDocuments(bien.id, uploadedDocuments);
            }
            return bien;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Erreur lors de la création du bien : ${error.message}`);
        }
    }
    async findAll() {
        return this.bienModel.findAll({
            include: ['proprietaire', 'documents', 'baux'],
        });
    }
    async findOne(id) {
        const bien = await this.bienModel.findByPk(id, {
            include: ['proprietaire', 'documents', 'baux'],
        });
        if (!bien) {
            throw new common_1.NotFoundException(`Bien avec l'ID ${id} non trouvé`);
        }
        return bien;
    }
    async update(id, updateBienDto) {
        const bien = await this.findOne(id);
        await bien.update({
            ...updateBienDto,
            date_mise_a_jour: new Date(),
        });
        return bien;
    }
    async remove(id) {
        const bien = await this.findOne(id);
        await bien.destroy();
    }
    async findByProprietaire(proprietaireId) {
        return this.bienModel.findAll({
            where: { proprietaire_id: proprietaireId },
            include: ['documents', 'baux'],
        });
    }
};
exports.BiensService = BiensService;
exports.BiensService = BiensService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(bien_model_1.Bien)),
    __metadata("design:paramtypes", [Object, photos_service_1.PhotosService,
        documents_service_1.DocumentsService])
], BiensService);
//# sourceMappingURL=biens.service.js.map