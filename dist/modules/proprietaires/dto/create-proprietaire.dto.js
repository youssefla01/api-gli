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
exports.CreateProprietaireDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateProprietaireDto {
}
exports.CreateProprietaireDto = CreateProprietaireDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Nom du propriétaire" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateProprietaireDto.prototype, "nom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Prénom du propriétaire" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateProprietaireDto.prototype, "prenom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Adresse e-mail du propriétaire" }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateProprietaireDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Numéro de téléphone du propriétaire" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 15),
    __metadata("design:type", String)
], CreateProprietaireDto.prototype, "telephone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Numéro de téléphone d'urgence", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 15),
    __metadata("design:type", String)
], CreateProprietaireDto.prototype, "numero_urgence", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Adresse complète du propriétaire" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProprietaireDto.prototype, "adresse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Identifiant fiscal du propriétaire" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CreateProprietaireDto.prototype, "identifiant_fiscal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "RIB du propriétaire" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 34),
    __metadata("design:type", String)
], CreateProprietaireDto.prototype, "rib", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Nom ou chemin de la pièce jointe", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], CreateProprietaireDto.prototype, "piece_jointe", void 0);
//# sourceMappingURL=create-proprietaire.dto.js.map