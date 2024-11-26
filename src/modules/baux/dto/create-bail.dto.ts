import { IsString, IsNumber, IsUUID, IsDate, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateBailDto {
  @ApiProperty()
  @IsUUID()
  bien_id: string;

  @ApiProperty()
  @IsUUID()
  locataire_id: string;

  @ApiProperty()
  @IsUUID()
  proprietaire_id: string;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  date_debut: Date;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  date_fin: Date;

  @ApiProperty()
  @IsNumber()
  montant_loyer: number;

  @ApiProperty()
  @IsNumber()
  depot_garantie: number;

  @ApiProperty({ required: false, default: 10.00 })
  @IsOptional()
  @IsNumber()
  commission_agence?: number;

  @ApiProperty({ required: false, default: 'Actif' })
  @IsOptional()
  @IsString()
  statut?: string;

  @ApiProperty()
  @IsString()
  document_bail: string;
}