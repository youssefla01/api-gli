import { IsString, IsEmail, IsOptional, Length, ValidateIf, IsJSON, IsArray, ArrayNotEmpty, IsObject } from 'class-validator';
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

  @ApiProperty({ description: "Adresse e-mail du propriétaire", required: false, nullable: true })
  @IsOptional()
  @ValidateIf((o) => o.email !== null && o.email !== '')
  @IsEmail({}, { message: "L'email doit être valide ou vide" })
  email?: string | null;

  @ApiProperty({ description: "Numéro de téléphone du propriétaire" })
  @IsString()
  @Length(1, 15)
  telephone: string;

  @ApiProperty({ description: "Adresse complète du propriétaire" })
  @IsString()
  adresse: string;

  @ApiProperty({ description: "Identifiant fiscal du propriétaire", required: false, nullable: true })
  @IsOptional()
  @ValidateIf((o) => o.identifiant_fiscal !== null && o.identifiant_fiscal !== '')
  @IsString()
  @Length(1, 50)
  identifiant_fiscal?: string | null;

  @ApiProperty({ description: "RIB du propriétaire", required: false, nullable: true })
  @IsOptional()
  @ValidateIf((o) => o.rib !== null && o.rib !== '')
  @IsString()
  @Length(1, 34)
  rib?: string | null;

  @ApiProperty({ 
    description: "Nom ou chemin de la pièce jointe", 
    required: false, 
    nullable: true, 
    type: [Object]  // Préciser que c'est un tableau d'objets
  })
  @IsOptional()
  @ValidateIf((o) => o.piece_jointe !== null && o.piece_jointe !== '')
  @IsArray()
  @ArrayNotEmpty()  // Vérifie que le tableau n'est pas vide
  @IsObject({ each: true })  // Vérifie que chaque élément du tableau est un objet
  piece_jointe?: { uid: string, name: string, url: string }[] | null;
}