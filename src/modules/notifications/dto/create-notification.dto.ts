import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto {
  @ApiProperty()
  @IsUUID()
  utilisateur_id: string;

  @ApiProperty()
  @IsString()
  type_notification: string;

  @ApiProperty()
  @IsString()
  message: string;
}