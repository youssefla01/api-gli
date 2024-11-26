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
exports.DocumentBien = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const bien_model_1 = require("./bien.model");
const administrateur_model_1 = require("./administrateur.model");
let DocumentBien = class DocumentBien extends sequelize_typescript_1.Model {
};
exports.DocumentBien = DocumentBien;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], DocumentBien.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => bien_model_1.Bien),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", String)
], DocumentBien.prototype, "bien_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(255)),
    __metadata("design:type", String)
], DocumentBien.prototype, "nom_document", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], DocumentBien.prototype, "chemin_document", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(50)),
    __metadata("design:type", String)
], DocumentBien.prototype, "type_document", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.DataType.NOW }),
    __metadata("design:type", Date)
], DocumentBien.prototype, "date_ajout", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => administrateur_model_1.Administrateur),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", String)
], DocumentBien.prototype, "ajout_par", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => bien_model_1.Bien),
    __metadata("design:type", bien_model_1.Bien)
], DocumentBien.prototype, "bien", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => administrateur_model_1.Administrateur),
    __metadata("design:type", administrateur_model_1.Administrateur)
], DocumentBien.prototype, "administrateur", void 0);
exports.DocumentBien = DocumentBien = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'documents_biens' })
], DocumentBien);
//# sourceMappingURL=document-bien.model.js.map