import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@ApiTags('notifications')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle notification' })
  @ApiResponse({ status: 201, description: 'Notification créée avec succès.' })
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.create(createNotificationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les notifications' })
  @ApiResponse({ status: 200, description: 'Liste des notifications récupérée avec succès.' })
  findAll() {
    return this.notificationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une notification par son ID' })
  @ApiResponse({ status: 200, description: 'Notification trouvée.' })
  @ApiResponse({ status: 404, description: 'Notification non trouvée.' })
  findOne(@Param('id') id: string) {
    return this.notificationsService.findOne(id);
  }

  @Get('utilisateur/:id')
  @ApiOperation({ summary: 'Récupérer toutes les notifications d\'un utilisateur' })
  @ApiResponse({ status: 200, description: 'Liste des notifications de l\'utilisateur récupérée avec succès.' })
  findByUser(@Param('id') id: string) {
    return this.notificationsService.findByUser(id);
  }

  @Patch(':id/read')
  @ApiOperation({ summary: 'Marquer une notification comme lue' })
  @ApiResponse({ status: 200, description: 'Notification marquée comme lue avec succès.' })
  @ApiResponse({ status: 404, description: 'Notification non trouvée.' })
  markAsRead(@Param('id') id: string) {
    return this.notificationsService.markAsRead(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour une notification' })
  @ApiResponse({ status: 200, description: 'Notification mise à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Notification non trouvée.' })
  update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
    return this.notificationsService.update(id, updateNotificationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une notification' })
  @ApiResponse({ status: 200, description: 'Notification supprimée avec succès.' })
  @ApiResponse({ status: 404, description: 'Notification non trouvée.' })
  remove(@Param('id') id: string) {
    return this.notificationsService.remove(id);
  }
}