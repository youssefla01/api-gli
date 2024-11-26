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
exports.BauxController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const baux_service_1 = require("./baux.service");
const create_bail_dto_1 = require("./dto/create-bail.dto");
const update_bail_dto_1 = require("./dto/update-bail.dto");
let BauxController = class BauxController {
    constructor(bauxService) {
        this.bauxService = bauxService;
    }
    create(createBailDto) {
        return this.bauxService.create(createBailDto);
    }
    findAll() {
        return this.bauxService.findAll();
    }
    findOne(id) {
        return this.bauxService.findOne(id);
    }
    findByProprietaire(id) {
        return this.bauxService.findByProprietaire(id);
    }
    findByLocataire(id) {
        return this.bauxService.findByLocataire(id);
    }
    findByBien(id) {
        return this.bauxService.findByBien(id);
    }
    update(id, updateBailDto) {
        return this.bauxService.update(id, updateBailDto);
    }
    remove(id) {
        return this.bauxService.remove(id);
    }
};
exports.BauxController = BauxController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouveau bail' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Bail créé avec succès.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bail_dto_1.CreateBailDto]),
    __metadata("design:returntype", void 0)
], BauxController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les baux' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des baux récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BauxController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un bail par son ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bail trouvé.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bail non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BauxController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('proprietaire/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les baux d\'un propriétaire' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des baux du propriétaire récupérée avec succès.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BauxController.prototype, "findByProprietaire", null);
__decorate([
    (0, common_1.Get)('locataire/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les baux d\'un locataire' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des baux du locataire récupérée avec succès.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BauxController.prototype, "findByLocataire", null);
__decorate([
    (0, common_1.Get)('bien/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les baux d\'un bien' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des baux du bien récupérée avec succès.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BauxController.prototype, "findByBien", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour un bail' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bail mis à jour avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bail non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bail_dto_1.UpdateBailDto]),
    __metadata("design:returntype", void 0)
], BauxController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un bail' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bail supprimé avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bail non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BauxController.prototype, "remove", null);
exports.BauxController = BauxController = __decorate([
    (0, swagger_1.ApiTags)('baux'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('baux'),
    __metadata("design:paramtypes", [baux_service_1.BauxService])
], BauxController);
//# sourceMappingURL=baux.controller.js.map