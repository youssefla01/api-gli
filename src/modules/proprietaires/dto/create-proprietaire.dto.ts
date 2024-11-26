import { IsString, IsEmail, IsOptional, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProprietaireDto {
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
  @Length(1, 50)
  identifiant_fiscal: string;

  @ApiProperty()
  @IsString()
  @Length(1, 34)
  rib: string;
}