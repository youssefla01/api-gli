import { IsString, IsNumber, IsUUID, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBienDto {
  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  adresse: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  surface: number;

  @ApiProperty()
  @IsNumber()
  nb_pieces: number;

  @ApiProperty({ required: false, default: 'Libre' })
  @IsOptional()
  @IsString()
  etat?: string;

  @ApiProperty()
  @IsNumber()
  prix_estimatif: number;

  @ApiProperty()
  @IsUUID()
  proprietaire_id: string;
}