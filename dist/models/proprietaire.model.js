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
exports.Proprietaire = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const bien_model_1 = require("./bien.model");
const releve_mensuel_model_1 = require("./releve-mensuel.model");
let Proprietaire = class Proprietaire extends sequelize_typescript_1.Model {
};
exports.Proprietaire = Proprietaire;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Proprietaire.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(100)),
    __metadata("design:type", String)
], Proprietaire.prototype, "nom", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(100)),
    __metadata("design:type", String)
], Proprietaire.prototype, "prenom", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), unique: true }),
    __metadata("design:type", String)
], Proprietaire.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(15)),
    __metadata("design:type", String)
], Proprietaire.prototype, "telephone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Proprietaire.prototype, "adresse", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(50)),
    __metadata("design:type", String)
], Proprietaire.prototype, "identifiant_fiscal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(34)),
    __metadata("design:type", String)
], Proprietaire.prototype, "rib", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.DataType.NOW }),
    __metadata("design:type", Date)
], Proprietaire.prototype, "date_creation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Proprietaire.prototype, "date_mise_a_jour", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => bien_model_1.Bien),
    __metadata("design:type", Array)
], Proprietaire.prototype, "biens", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => releve_mensuel_model_1.ReleveMensuel),
    __metadata("design:type", Array)
], Proprietaire.prototype, "releves", void 0);
exports.Proprietaire = Proprietaire = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'proprietaires' })
], Proprietaire);
//# sourceMappingURL=proprietaire.model.js.map