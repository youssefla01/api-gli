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
exports.DocumentsBiensController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const documents_biens_service_1 = require("./documents-biens.service");
const create_document_bien_dto_1 = require("./dto/create-document-bien.dto");
const update_document_bien_dto_1 = require("./dto/update-document-bien.dto");
let DocumentsBiensController = class DocumentsBiensController {
    constructor(documentsBiensService) {
        this.documentsBiensService = documentsBiensService;
    }
    create(createDocumentBienDto) {
        return this.documentsBiensService.create(createDocumentBienDto);
    }
    findAll() {
        return this.documentsBiensService.findAll();
    }
    findOne(id) {
        return this.documentsBiensService.findOne(id);
    }
    findByBien(id) {
        return this.documentsBiensService.findByBien(id);
    }
    findByType(type) {
        return this.documentsBiensService.findByType(type);
    }
    update(id, updateDocumentBienDto) {
        return this.documentsBiensService.update(id, updateDocumentBienDto);
    }
    remove(id) {
        return this.documentsBiensService.remove(id);
    }
};
exports.DocumentsBiensController = DocumentsBiensController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouveau document' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Document créé avec succès.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_document_bien_dto_1.CreateDocumentBienDto]),
    __metadata("design:returntype", void 0)
], DocumentsBiensController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les documents' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des documents récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocumentsBiensController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un document par son ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Document trouvé.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Document non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsBiensController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('bien/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les documents d\'un bien' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des documents du bien récupérée avec succès.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsBiensController.prototype, "findByBien", null);
__decorate([
    (0, common_1.Get)('type/:type'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les documents d\'un type spécifique' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des documents du type spécifié récupérée avec succès.' }),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsBiensController.prototype, "findByType", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour un document' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Document mis à jour avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Document non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_document_bien_dto_1.UpdateDocumentBienDto]),
    __metadata("design:returntype", void 0)
], DocumentsBiensController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un document' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Document supprimé avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Document non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsBiensController.prototype, "remove", null);
exports.DocumentsBiensController = DocumentsBiensController = __decorate([
    (0, swagger_1.ApiTags)('documents-biens'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('documents-biens'),
    __metadata("design:paramtypes", [documents_biens_service_1.DocumentsBiensService])
], DocumentsBiensController);
//# sourceMappingURL=documents-biens.controller.js.map