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
exports.Bien = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const proprietaire_model_1 = require("./proprietaire.model");
const document_bien_model_1 = require("./document-bien.model");
const bail_model_1 = require("./bail.model");
const photo_bien_model_1 = require("./photo-bien.model");
let Bien = class Bien extends sequelize_typescript_1.Model {
};
exports.Bien = Bien;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Bien.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(50)),
    __metadata("design:type", String)
], Bien.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Bien.prototype, "adresse", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Bien.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL(10, 2)),
    __metadata("design:type", Number)
], Bien.prototype, "surface", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Bien.prototype, "nb_pieces", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(20), defaultValue: 'Libre' }),
    __metadata("design:type", String)
], Bien.prototype, "etat", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => proprietaire_model_1.Proprietaire),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", String)
], Bien.prototype, "proprietaire_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => proprietaire_model_1.Proprietaire),
    __metadata("design:type", proprietaire_model_1.Proprietaire)
], Bien.prototype, "proprietaire", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.DataType.NOW }),
    __metadata("design:type", Date)
], Bien.prototype, "date_creation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Bien.prototype, "date_mise_a_jour", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => document_bien_model_1.DocumentBien),
    __metadata("design:type", Array)
], Bien.prototype, "documents", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => bail_model_1.Bail),
    __metadata("design:type", Array)
], Bien.prototype, "baux", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL(10, 2)),
    __metadata("design:type", Number)
], Bien.prototype, "prix", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => photo_bien_model_1.PhotoBien),
    __metadata("design:type", Array)
], Bien.prototype, "photos", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(50)),
    __metadata("design:type", String)
], Bien.prototype, "ref_compteur_eau", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(50)),
    __metadata("design:type", String)
], Bien.prototype, "ref_compteur_electricite", void 0);
exports.Bien = Bien = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'biens' })
], Bien);
//# sourceMappingURL=bien.model.js.map