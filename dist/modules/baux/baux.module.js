"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BauxModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const baux_service_1 = require("./baux.service");
const baux_controller_1 = require("./baux.controller");
const bail_model_1 = require("../../models/bail.model");
let BauxModule = class BauxModule {
};
exports.BauxModule = BauxModule;
exports.BauxModule = BauxModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([bail_model_1.Bail])],
        controllers: [baux_controller_1.BauxController],
        providers: [baux_service_1.BauxService],
        exports: [baux_service_1.BauxService],
    })
], BauxModule);
//# sourceMappingURL=baux.module.js.map