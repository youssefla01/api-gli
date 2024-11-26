import { IsString, IsNumber, IsUUID, IsDate, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePaiementDto {
  @ApiProperty()
  @IsUUID()
  bail_id: string;

  @ApiProperty()
  @IsNumber()
  montant_paiement: number;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  date_paiement: Date;

  @ApiProperty()
  @IsString()
  methode_paiement: string;

  @ApiProperty({ required: false, default: 'En attente' })
  @IsOptional()
  @IsString()
  statut?: string;

  @ApiProperty()
  @IsString()
  recu_document: string;

  @ApiProperty()
  @IsNumber()
  commission_agence: number;

  @ApiProperty()
  @IsNumber()
  revenu_net_proprietaire: number;
}