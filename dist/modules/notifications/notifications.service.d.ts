import { Notification } from '../../models/notification.model';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
export declare class NotificationsService {
    private notificationModel;
    constructor(notificationModel: typeof Notification);
    create(createNotificationDto: CreateNotificationDto): Promise<Notification>;
    findAll(): Promise<Notification[]>;
    findOne(id: string): Promise<Notification>;
    update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<Notification>;
    remove(id: string): Promise<void>;
    findByUser(utilisateurId: string): Promise<Notification[]>;
    markAsRead(id: string): Promise<Notification>;
}
