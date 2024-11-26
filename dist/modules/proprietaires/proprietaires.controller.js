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
exports.ProprietairesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const proprietaires_service_1 = require("./proprietaires.service");
const create_proprietaire_dto_1 = require("./dto/create-proprietaire.dto");
const update_proprietaire_dto_1 = require("./dto/update-proprietaire.dto");
let ProprietairesController = class ProprietairesController {
    constructor(proprietairesService) {
        this.proprietairesService = proprietairesService;
    }
    create(createProprietaireDto) {
        return this.proprietairesService.create(createProprietaireDto);
    }
    findAll() {
        return this.proprietairesService.findAll();
    }
    findOne(id) {
        return this.proprietairesService.findOne(id);
    }
    update(id, updateProprietaireDto) {
        return this.proprietairesService.update(id, updateProprietaireDto);
    }
    remove(id) {
        return this.proprietairesService.remove(id);
    }
};
exports.ProprietairesController = ProprietairesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouveau propriétaire' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Propriétaire créé avec succès.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_proprietaire_dto_1.CreateProprietaireDto]),
    __metadata("design:returntype", void 0)
], ProprietairesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les propriétaires' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des propriétaires récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProprietairesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un propriétaire par son ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Propriétaire trouvé.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Propriétaire non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProprietairesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour un propriétaire' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Propriétaire mis à jour avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Propriétaire non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_proprietaire_dto_1.UpdateProprietaireDto]),
    __metadata("design:returntype", void 0)
], ProprietairesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un propriétaire' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Propriétaire supprimé avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Propriétaire non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProprietairesController.prototype, "remove", null);
exports.ProprietairesController = ProprietairesController = __decorate([
    (0, swagger_1.ApiTags)('proprietaires'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('proprietaires'),
    __metadata("design:paramtypes", [proprietaires_service_1.ProprietairesService])
], ProprietairesController);
//# sourceMappingURL=proprietaires.controller.js.map