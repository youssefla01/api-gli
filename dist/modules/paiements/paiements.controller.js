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
exports.PaiementsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const paiements_service_1 = require("./paiements.service");
const create_paiement_dto_1 = require("./dto/create-paiement.dto");
const update_paiement_dto_1 = require("./dto/update-paiement.dto");
let PaiementsController = class PaiementsController {
    constructor(paiementsService) {
        this.paiementsService = paiementsService;
    }
    create(createPaiementDto) {
        return this.paiementsService.create(createPaiementDto);
    }
    findAll() {
        return this.paiementsService.findAll();
    }
    findOne(id) {
        return this.paiementsService.findOne(id);
    }
    findByBail(id) {
        return this.paiementsService.findByBail(id);
    }
    findByPeriode(debut, fin) {
        return this.paiementsService.findByPeriode(debut, fin);
    }
    update(id, updatePaiementDto) {
        return this.paiementsService.update(id, updatePaiementDto);
    }
    remove(id) {
        return this.paiementsService.remove(id);
    }
};
exports.PaiementsController = PaiementsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouveau paiement' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Paiement créé avec succès.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paiement_dto_1.CreatePaiementDto]),
    __metadata("design:returntype", void 0)
], PaiementsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les paiements' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des paiements récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaiementsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un paiement par son ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Paiement trouvé.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paiement non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaiementsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('bail/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les paiements d\'un bail' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des paiements du bail récupérée avec succès.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaiementsController.prototype, "findByBail", null);
__decorate([
    (0, common_1.Get)('periode'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer les paiements pour une période donnée' }),
    (0, swagger_1.ApiQuery)({ name: 'debut', type: Date }),
    (0, swagger_1.ApiQuery)({ name: 'fin', type: Date }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des paiements pour la période récupérée avec succès.' }),
    __param(0, (0, common_1.Query)('debut')),
    __param(1, (0, common_1.Query)('fin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date,
        Date]),
    __metadata("design:returntype", void 0)
], PaiementsController.prototype, "findByPeriode", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour un paiement' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Paiement mis à jour avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paiement non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_paiement_dto_1.UpdatePaiementDto]),
    __metadata("design:returntype", void 0)
], PaiementsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un paiement' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Paiement supprimé avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paiement non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaiementsController.prototype, "remove", null);
exports.PaiementsController = PaiementsController = __decorate([
    (0, swagger_1.ApiTags)('paiements'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('paiements'),
    __metadata("design:paramtypes", [paiements_service_1.PaiementsService])
], PaiementsController);
//# sourceMappingURL=paiements.controller.js.map