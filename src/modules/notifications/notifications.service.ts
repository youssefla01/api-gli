import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Notification } from '../../models/notification.model';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(Notification)
    private notificationModel: typeof Notification,
  ) {}

  async create(createNotificationDto: CreateNotificationDto): Promise<Notification> {
    return this.notificationModel.create({
      ...createNotificationDto,
      date_envoi: new Date(),
    });
  }

  async findAll(): Promise<Notification[]> {
    return this.notificationModel.findAll();
  }

  async findOne(id: string): Promise<Notification> {
    const notification = await this.notificationModel.findByPk(id);

    if (!notification) {
      throw new NotFoundException(`Notification avec l'ID ${id} non trouvée`);
    }

    return notification;
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<Notification> {
    const notification = await this.findOne(id);
    await notification.update(updateNotificationDto);
    return notification;
  }

  async remove(id: string): Promise<void> {
    const notification = await this.findOne(id);
    await notification.destroy();
  }

  async findByUser(utilisateurId: string): Promise<Notification[]> {
    return this.notificationModel.findAll({
      where: { utilisateur_id: utilisateurId },
    });
  }

  async markAsRead(id: string): Promise<Notification> {
    const notification = await this.findOne(id);
    await notification.update({
      statut: 'Lu',
      date_lecture: new Date(),
    });
    return notification;
  }
}