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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiensController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const biens_service_1 = require("./biens.service");
const create_bien_dto_1 = require("./dto/create-bien.dto");
const update_bien_dto_1 = require("./dto/update-bien.dto");
const files_service_1 = require("../FilesModule/files.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const fs_1 = require("fs");
const file_helper_util_1 = require("../FilesModule/utils/file-helper.util");
let BiensController = class BiensController {
    constructor(biensService, filesService) {
        this.biensService = biensService;
        this.filesService = filesService;
        ['uploads', 'uploads/photos', 'uploads/documents'].forEach(dir => {
            if (!(0, fs_1.existsSync)(dir)) {
                (0, fs_1.mkdirSync)(dir, { recursive: true });
            }
        });
    }
    async create(createBienDto, files) {
        console.log('Files received:', files);
        console.log('DTO received:', createBienDto);
        try {
            const bien = await this.biensService.create(createBienDto, files?.photos || [], files?.documents || []);
            return {
                status: 201,
                message: 'Bien créé avec succès',
                data: bien
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    findAll() {
        return this.biensService.findAll();
    }
    findOne(id) {
        return this.biensService.findOne(id);
    }
    findByProprietaire(id) {
        return this.biensService.findByProprietaire(id);
    }
    update(id, updateBienDto) {
        return this.biensService.update(id, updateBienDto);
    }
    remove(id) {
        return this.biensService.remove(id);
    }
};
exports.BiensController = BiensController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouveau bien' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Bien créé avec succès.' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'photos', maxCount: 10 },
        { name: 'documents', maxCount: 10 }
    ], {
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const folder = file.fieldname === 'photos' ? 'uploads/photos' : 'uploads/documents';
                cb(null, folder);
            },
            filename: (req, file, cb) => {
                const fileName = file_helper_util_1.FileHelper.generateFileName(file);
                console.log(`Saving ${file.fieldname}: ${fileName}`);
                cb(null, fileName);
            }
        }),
        fileFilter: (req, file, cb) => {
            const isValid = file.fieldname === 'photos'
                ? file_helper_util_1.FileHelper.isImage(file)
                : file_helper_util_1.FileHelper.isDocument(file);
            if (!isValid) {
                cb(new common_1.BadRequestException(`Invalid file type for ${file.fieldname}`), false);
            }
            cb(null, true);
        }
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bien_dto_1.CreateBienDto, Object]),
    __metadata("design:returntype", Promise)
], BiensController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les biens' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des biens récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BiensController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un bien par son ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bien trouvé.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bien non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiensController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('proprietaire/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les biens d\'un propriétaire' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des biens du propriétaire récupérée avec succès.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiensController.prototype, "findByProprietaire", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour un bien' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bien mis à jour avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bien non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bien_dto_1.UpdateBienDto]),
    __metadata("design:returntype", void 0)
], BiensController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un bien' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bien supprimé avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bien non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiensController.prototype, "remove", null);
exports.BiensController = BiensController = __decorate([
    (0, swagger_1.ApiTags)('biens'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('biens'),
    __metadata("design:paramtypes", [biens_service_1.BiensService,
        files_service_1.FilesService])
], BiensController);
function uuidv4() {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=biens.controller.js.map