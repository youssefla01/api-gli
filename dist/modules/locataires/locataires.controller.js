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
exports.LocatairesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const locataires_service_1 = require("./locataires.service");
const create_locataire_dto_1 = require("./dto/create-locataire.dto");
const update_locataire_dto_1 = require("./dto/update-locataire.dto");
let LocatairesController = class LocatairesController {
    constructor(locatairesService) {
        this.locatairesService = locatairesService;
    }
    create(createLocataireDto) {
        return this.locatairesService.create(createLocataireDto);
    }
    findAll() {
        return this.locatairesService.findAll();
    }
    findOne(id) {
        return this.locatairesService.findOne(id);
    }
    update(id, updateLocataireDto) {
        return this.locatairesService.update(id, updateLocataireDto);
    }
    remove(id) {
        return this.locatairesService.remove(id);
    }
};
exports.LocatairesController = LocatairesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouveau locataire' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Locataire créé avec succès.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_locataire_dto_1.CreateLocataireDto]),
    __metadata("design:returntype", void 0)
], LocatairesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les locataires' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des locataires récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocatairesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un locataire par son ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Locataire trouvé.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Locataire non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocatairesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour un locataire' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Locataire mis à jour avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Locataire non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_locataire_dto_1.UpdateLocataireDto]),
    __metadata("design:returntype", void 0)
], LocatairesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un locataire' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Locataire supprimé avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Locataire non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocatairesController.prototype, "remove", null);
exports.LocatairesController = LocatairesController = __decorate([
    (0, swagger_1.ApiTags)('locataires'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('locataires'),
    __metadata("design:paramtypes", [locataires_service_1.LocatairesService])
], LocatairesController);
//# sourceMappingURL=locataires.controller.js.map