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
exports.CreateBienDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateBienDto {
}
exports.CreateBienDto = CreateBienDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBienDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBienDto.prototype, "adresse", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBienDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBienDto.prototype, "etat", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateBienDto.prototype, "proprietaire_id", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBienDto.prototype, "surface", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBienDto.prototype, "nb_pieces", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBienDto.prototype, "prix", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBienDto.prototype, "ref_compteur_eau", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBienDto.prototype, "ref_compteur_electricite", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', required: false, isArray: true }),
    __metadata("design:type", Array)
], CreateBienDto.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', required: false, isArray: true }),
    __metadata("design:type", Array)
], CreateBienDto.prototype, "documents", void 0);
//# sourceMappingURL=create-bien.dto.js.map