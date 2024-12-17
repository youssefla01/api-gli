import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsUUID, IsNumber } from 'class-validator';

export class CreateBienDto {
  @IsString()
  readonly type: string;

  @IsString()
  readonly adresse: string;

  @IsString()
  @IsOptional()
  readonly description?: string;


  @IsString()
  @IsOptional()
  readonly etat?: string;

  @IsUUID()
  readonly proprietaire_id: string;

  @Transform(({ value }) => (value ? Number(value) : value))
  @IsNumber()
  readonly surface?: number;

  @Transform(({ value }) => (value ? Number(value) : value))
  @IsNumber()
  readonly nb_pieces?: number;

  @Transform(({ value }) => (value ? Number(value) : value))
  @IsNumber()
  readonly prix?: number;
  @IsString()
  readonly ref_compteur_eau?: string;

  @IsString()
  readonly ref_compteur_electricite?: string;

  // Ajouter des fichiers pour documents
  @ApiProperty({ type: 'string', format: 'binary', required: false, isArray: true })
  photos?: any[];

  @ApiProperty({ type: 'string', format: 'binary', required: false, isArray: true })
  documents?: any[];
}
