import { IsString, IsEmail, IsOptional, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLocataireDto {
  @ApiProperty()
  @IsString()
  @Length(1, 100)
  nom: string;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  prenom: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @Length(1, 15)
  telephone: string;

  @ApiProperty()
  @IsString()
  adresse: string;

  @ApiProperty()
  @IsString()
  piece_identite: string;

  @ApiProperty({ required: false, default: 'Actif' })
  @IsOptional()
  @IsString()
  statut?: string;
}