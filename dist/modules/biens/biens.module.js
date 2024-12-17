"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiensModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const biens_controller_1 = require("./biens.controller");
const bien_model_1 = require("../../models/bien.model");
const photo_bien_model_1 = require("../../models/photo-bien.model");
const document_bien_model_1 = require("../../models/document-bien.model");
const files_module_1 = require("../FilesModule/files.module");
const biens_service_1 = require("./biens.service");
const photos_service_1 = require("./photos.service");
const documents_service_1 = require("./documents.service");
let BiensModule = class BiensModule {
};
exports.BiensModule = BiensModule;
exports.BiensModule = BiensModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([bien_model_1.Bien, photo_bien_model_1.PhotoBien, document_bien_model_1.DocumentBien]),
            files_module_1.FilesModule
        ],
        controllers: [biens_controller_1.BiensController],
        providers: [
            biens_service_1.BiensService,
            photos_service_1.PhotosService,
            documents_service_1.DocumentsService
        ],
        exports: [biens_service_1.BiensService],
    })
], BiensModule);
//# sourceMappingURL=biens.module.js.map