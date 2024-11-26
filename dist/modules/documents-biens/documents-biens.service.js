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
exports.DocumentsBiensService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const document_bien_model_1 = require("../../models/document-bien.model");
let DocumentsBiensService = class DocumentsBiensService {
    constructor(documentBienModel) {
        this.documentBienModel = documentBienModel;
    }
    async create(createDocumentBienDto) {
        return this.documentBienModel.create({
            ...createDocumentBienDto,
            date_ajout: new Date(),
        });
    }
    async findAll() {
        return this.documentBienModel.findAll({
            include: ['bien', 'administrateur'],
        });
    }
    async findOne(id) {
        const document = await this.documentBienModel.findByPk(id, {
            include: ['bien', 'administrateur'],
        });
        if (!document) {
            throw new common_1.NotFoundException(`Document avec l'ID ${id} non trouvé`);
        }
        return document;
    }
    async update(id, updateDocumentBienDto) {
        const document = await this.findOne(id);
        await document.update(updateDocumentBienDto);
        return document;
    }
    async remove(id) {
        const document = await this.findOne(id);
        await document.destroy();
    }
    async findByBien(bienId) {
        return this.documentBienModel.findAll({
            where: { bien_id: bienId },
            include: ['administrateur'],
        });
    }
    async findByType(type) {
        return this.documentBienModel.findAll({
            where: { type_document: type },
            include: ['bien', 'administrateur'],
        });
    }
};
exports.DocumentsBiensService = DocumentsBiensService;
exports.DocumentsBiensService = DocumentsBiensService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(document_bien_model_1.DocumentBien)),
    __metadata("design:paramtypes", [Object])
], DocumentsBiensService);
//# sourceMappingURL=documents-biens.service.js.map