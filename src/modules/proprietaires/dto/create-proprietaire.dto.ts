import { IsString, IsEmail, IsOptional, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProprietaireDto {
  @ApiProperty({ description: "Nom du propriétaire" })
  @IsString()
  @Length(1, 100)
  nom: string;

  @ApiProperty({ description: "Prénom du propriétaire" })
  @IsString()
  @Length(1, 100)
  prenom: string;

  @ApiProperty({ description: "Adresse e-mail du propriétaire" })
  @IsEmail()
  email: string;

  @ApiProperty({ description: "Numéro de téléphone du propriétaire" })
  @IsString()
  @Length(1, 15)
  telephone: string;

  @ApiProperty({ description: "Numéro de téléphone d'urgence", required: false })
  @IsOptional()
  @IsString()
  @Length(1, 15)
  numero_urgence: string;

  @ApiProperty({ description: "Adresse complète du propriétaire" })
  @IsString()
  adresse: string;

  @ApiProperty({ description: "Identifiant fiscal du propriétaire" })
  @IsString()
  @Length(1, 50)
  identifiant_fiscal: string;

  @ApiProperty({ description: "RIB du propriétaire" })
  @IsString()
  @Length(1, 34)
  rib: string;

  @ApiProperty({ description: "Nom ou chemin de la pièce jointe", required: false })
  @IsOptional()
  @IsString()
  @Length(1, 255)
  piece_jointe: string;
}
