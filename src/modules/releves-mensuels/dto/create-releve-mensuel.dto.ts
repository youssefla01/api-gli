import { IsNumber, IsUUID, Min, Max, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReleveMensuelDto {
  @ApiProperty()
  @IsUUID()
  proprietaire_id: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(12)
  mois: number;

  @ApiProperty()
  @IsNumber()
  @Min(2000)
  annee: number;

  @ApiProperty()
  @IsNumber()
  total_revenus: number;

  @ApiProperty()
  @IsNumber()
  total_commission: number;

  @ApiProperty()
  @IsString()
  document_releve: string;

  @ApiProperty()
  @IsUUID()
  genere_par: string;
}