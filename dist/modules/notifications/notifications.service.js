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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const notification_model_1 = require("../../models/notification.model");
let NotificationsService = class NotificationsService {
    constructor(notificationModel) {
        this.notificationModel = notificationModel;
    }
    async create(createNotificationDto) {
        return this.notificationModel.create({
            ...createNotificationDto,
            date_envoi: new Date(),
        });
    }
    async findAll() {
        return this.notificationModel.findAll();
    }
    async findOne(id) {
        const notification = await this.notificationModel.findByPk(id);
        if (!notification) {
            throw new common_1.NotFoundException(`Notification avec l'ID ${id} non trouvée`);
        }
        return notification;
    }
    async update(id, updateNotificationDto) {
        const notification = await this.findOne(id);
        await notification.update(updateNotificationDto);
        return notification;
    }
    async remove(id) {
        const notification = await this.findOne(id);
        await notification.destroy();
    }
    async findByUser(utilisateurId) {
        return this.notificationModel.findAll({
            where: { utilisateur_id: utilisateurId },
        });
    }
    async markAsRead(id) {
        const notification = await this.findOne(id);
        await notification.update({
            statut: 'Lu',
            date_lecture: new Date(),
        });
        return notification;
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(notification_model_1.Notification)),
    __metadata("design:paramtypes", [Object])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map