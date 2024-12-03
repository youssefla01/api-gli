import { IsString, IsEmail, IsOptional, Length, IsDate, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

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

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Length(1, 20)
  cin?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  piece_identite?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  piece_jointe?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  commentaire?: string;

  @ApiProperty()
  @IsString()
  @Length(1, 50)
  situation_familiale: string;

  @ApiProperty()
  @IsInt()
  nombre_enfants: number;

  @ApiProperty()
  @IsString()
  @Length(1, 50)
  nationalite: string;

  @ApiProperty({ required: false, default: 'Actif' })
  @IsOptional()
  @IsString()
  statut?: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date) 
  date_naissance: Date;

  @ApiProperty()
  @IsString()
  lieu_naissance: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  contact_urgence?: string;
}
