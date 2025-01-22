import { IsString, IsEmail, IsOptional, Length, IsDate, IsInt, ValidateIf, IsArray, ArrayNotEmpty, IsObject, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

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
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @Length(1, 15)
  telephone: string;

  @ApiProperty()
  @IsString()
  adresse: string;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  @Length(1, 20)
  @ValidateIf((o) => o.cin !== null && o.cin !== '') // Validation conditionnelle pour cin
  cin?: string;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  @ValidateIf((o) => o.piece_identite !== null && o.piece_identite !== '') // Validation conditionnelle pour piece_identite
  piece_identite?: string;

  @IsOptional()
  @ValidateIf((o) => o.piece_jointe !== null && o.piece_jointe !== '')
  @IsArray()
  @ArrayNotEmpty()  // Vérifie que le tableau n'est pas vide
  @IsObject({ each: true })  // Vérifie que chaque élément du tableau est un objet
  piece_jointe?: { uid: string, name: string, url: string }[] | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  @ValidateIf((o) => o.commentaire !== null && o.commentaire !== '') // Validation conditionnelle pour commentaire
  commentaire?: string;

  @ApiProperty()
  @IsString()
  @Length(1, 50)
  situation_familiale: string;

  @ApiProperty()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  nombre_enfants: number;

  @ApiProperty()
  @IsString()
  @Length(1, 50)
  nationalite: string;

  @ApiProperty({ required: false, default: 'Actif' })
  @IsOptional()
  @IsString()
  @ValidateIf((o) => o.statut !== null && o.statut !== '') // Validation conditionnelle pour statut
  statut?: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  date_naissance: Date;

  @ApiProperty()
  @IsString()
  lieu_naissance: string;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  @ValidateIf((o) => o.contact_urgence !== null && o.contact_urgence !== '') // Validation conditionnelle pour contact_urgence
  contact_urgence?: string;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  @Length(1, 100)
  @ValidateIf((o) => o.profession !== null && o.profession !== '')
  profession?: string;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @Transform(({ value }) => (value !== '' && value !== null ? parseFloat(value) : null))
  @IsNumber()
  @ValidateIf((o) => o.revenu_mensuel !== null && o.revenu_mensuel !== '') 
  revenu_mensuel?: string;

}
