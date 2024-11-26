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
exports.ReleveMensuel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const proprietaire_model_1 = require("./proprietaire.model");
const administrateur_model_1 = require("./administrateur.model");
let ReleveMensuel = class ReleveMensuel extends sequelize_typescript_1.Model {
};
exports.ReleveMensuel = ReleveMensuel;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], ReleveMensuel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => proprietaire_model_1.Proprietaire),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", String)
], ReleveMensuel.prototype, "proprietaire_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], ReleveMensuel.prototype, "mois", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], ReleveMensuel.prototype, "annee", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL(10, 2)),
    __metadata("design:type", Number)
], ReleveMensuel.prototype, "total_revenus", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL(10, 2)),
    __metadata("design:type", Number)
], ReleveMensuel.prototype, "total_commission", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], ReleveMensuel.prototype, "document_releve", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => administrateur_model_1.Administrateur),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", String)
], ReleveMensuel.prototype, "genere_par", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.DataType.NOW }),
    __metadata("design:type", Date)
], ReleveMensuel.prototype, "date_creation", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => proprietaire_model_1.Proprietaire),
    __metadata("design:type", proprietaire_model_1.Proprietaire)
], ReleveMensuel.prototype, "proprietaire", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => administrateur_model_1.Administrateur),
    __metadata("design:type", administrateur_model_1.Administrateur)
], ReleveMensuel.prototype, "administrateur", void 0);
exports.ReleveMensuel = ReleveMensuel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'releves_mensuels' })
], ReleveMensuel);
//# sourceMappingURL=releve-mensuel.model.js.map