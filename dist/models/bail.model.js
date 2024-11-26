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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bail = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const bien_model_1 = require("./bien.model");
const locataire_model_1 = require("./locataire.model");
const proprietaire_model_1 = require("./proprietaire.model");
const paiement_model_1 = require("./paiement.model");
let Bail = class Bail extends sequelize_typescript_1.Model {
};
exports.Bail = Bail;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Bail.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => bien_model_1.Bien),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", String)
], Bail.prototype, "bien_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => locataire_model_1.Locataire),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", String)
], Bail.prototype, "locataire_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => proprietaire_model_1.Proprietaire),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", String)
], Bail.prototype, "proprietaire_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY),
    __metadata("design:type", Date)
], Bail.prototype, "date_debut", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY),
    __metadata("design:type", Date)
], Bail.prototype, "date_fin", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL(10, 2)),
    __metadata("design:type", Number)
], Bail.prototype, "montant_loyer", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL(10, 2)),
    __metadata("design:type", Number)
], Bail.prototype, "depot_garantie", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DECIMAL(5, 2), defaultValue: 10.00 }),
    __metadata("design:type", Number)
], Bail.prototype, "commission_agence", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(20), defaultValue: 'Actif' }),
    __metadata("design:type", String)
], Bail.prototype, "statut", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Bail.prototype, "document_bail", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.DataType.NOW }),
    __metadata("design:type", Date)
], Bail.prototype, "date_creation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Bail.prototype, "date_mise_a_jour", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => bien_model_1.Bien),
    __metadata("design:type", bien_model_1.Bien)
], Bail.prototype, "bien", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => locataire_model_1.Locataire),
    __metadata("design:type", locataire_model_1.Locataire)
], Bail.prototype, "locataire", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => proprietaire_model_1.Proprietaire),
    __metadata("design:type", proprietaire_model_1.Proprietaire)
], Bail.prototype, "proprietaire", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => paiement_model_1.Paiement),
    __metadata("design:type", Array)
], Bail.prototype, "paiements", void 0);
exports.Bail = Bail = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'baux' })
], Bail);
//# sourceMappingURL=bail.model.js.map