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
exports.RelevesMensuelsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const releves_mensuels_service_1 = require("./releves-mensuels.service");
const create_releve_mensuel_dto_1 = require("./dto/create-releve-mensuel.dto");
const update_releve_mensuel_dto_1 = require("./dto/update-releve-mensuel.dto");
let RelevesMensuelsController = class RelevesMensuelsController {
    constructor(relevesMensuelsService) {
        this.relevesMensuelsService = relevesMensuelsService;
    }
    create(createReleveMensuelDto) {
        return this.relevesMensuelsService.create(createReleveMensuelDto);
    }
    findAll() {
        return this.relevesMensuelsService.findAll();
    }
    findOne(id) {
        return this.relevesMensuelsService.findOne(id);
    }
    findByProprietaire(id) {
        return this.relevesMensuelsService.findByProprietaire(id);
    }
    findByPeriode(mois, annee) {
        return this.relevesMensuelsService.findByPeriode(mois, annee);
    }
    update(id, updateReleveMensuelDto) {
        return this.relevesMensuelsService.update(id, updateReleveMensuelDto);
    }
    remove(id) {
        return this.relevesMensuelsService.remove(id);
    }
};
exports.RelevesMensuelsController = RelevesMensuelsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouveau relevé mensuel' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Relevé mensuel créé avec succès.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_releve_mensuel_dto_1.CreateReleveMensuelDto]),
    __metadata("design:returntype", void 0)
], RelevesMensuelsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les relevés mensuels' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des relevés mensuels récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RelevesMensuelsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un relevé mensuel par son ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Relevé mensuel trouvé.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Relevé mensuel non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RelevesMensuelsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('proprietaire/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les relevés mensuels d\'un propriétaire' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des relevés mensuels du propriétaire récupérée avec succès.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RelevesMensuelsController.prototype, "findByProprietaire", null);
__decorate([
    (0, common_1.Get)('periode'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer les relevés mensuels pour une période donnée' }),
    (0, swagger_1.ApiQuery)({ name: 'mois', type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'annee', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des relevés mensuels pour la période récupérée avec succès.' }),
    __param(0, (0, common_1.Query)('mois')),
    __param(1, (0, common_1.Query)('annee')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], RelevesMensuelsController.prototype, "findByPeriode", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour un relevé mensuel' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Relevé mensuel mis à jour avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Relevé mensuel non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_releve_mensuel_dto_1.UpdateReleveMensuelDto]),
    __metadata("design:returntype", void 0)
], RelevesMensuelsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un relevé mensuel' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Relevé mensuel supprimé avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Relevé mensuel non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RelevesMensuelsController.prototype, "remove", null);
exports.RelevesMensuelsController = RelevesMensuelsController = __decorate([
    (0, swagger_1.ApiTags)('releves-mensuels'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('releves-mensuels'),
    __metadata("design:paramtypes", [releves_mensuels_service_1.RelevesMensuelsService])
], RelevesMensuelsController);
//# sourceMappingURL=releves-mensuels.controller.js.map