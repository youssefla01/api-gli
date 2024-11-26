"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelevesMensuelsModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const releves_mensuels_service_1 = require("./releves-mensuels.service");
const releves_mensuels_controller_1 = require("./releves-mensuels.controller");
const releve_mensuel_model_1 = require("../../models/releve-mensuel.model");
let RelevesMensuelsModule = class RelevesMensuelsModule {
};
exports.RelevesMensuelsModule = RelevesMensuelsModule;
exports.RelevesMensuelsModule = RelevesMensuelsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([releve_mensuel_model_1.ReleveMensuel])],
        controllers: [releves_mensuels_controller_1.RelevesMensuelsController],
        providers: [releves_mensuels_service_1.RelevesMensuelsService],
        exports: [releves_mensuels_service_1.RelevesMensuelsService],
    })
], RelevesMensuelsModule);
//# sourceMappingURL=releves-mensuels.module.js.map