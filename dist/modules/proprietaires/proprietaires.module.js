"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProprietairesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const proprietaires_service_1 = require("./proprietaires.service");
const proprietaires_controller_1 = require("./proprietaires.controller");
const proprietaire_model_1 = require("../../models/proprietaire.model");
let ProprietairesModule = class ProprietairesModule {
};
exports.ProprietairesModule = ProprietairesModule;
exports.ProprietairesModule = ProprietairesModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([proprietaire_model_1.Proprietaire])],
        controllers: [proprietaires_controller_1.ProprietairesController],
        providers: [proprietaires_service_1.ProprietairesService],
        exports: [proprietaires_service_1.ProprietairesService],
    })
], ProprietairesModule);
//# sourceMappingURL=proprietaires.module.js.map