import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(createNotificationDto: CreateNotificationDto): Promise<import("../../models/notification.model").Notification>;
    findAll(): Promise<import("../../models/notification.model").Notification[]>;
    findOne(id: string): Promise<import("../../models/notification.model").Notification>;
    findByUser(id: string): Promise<import("../../models/notification.model").Notification[]>;
    markAsRead(id: string): Promise<import("../../models/notification.model").Notification>;
    update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<import("../../models/notification.model").Notification>;
    remove(id: string): Promise<void>;
}
