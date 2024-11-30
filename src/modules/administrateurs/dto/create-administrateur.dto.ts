import { IsEmail, IsString, IsOptional, Length } from 'class-validator';

export class CreateAdministrateurDto {
  @IsString()
  @Length(1, 100)
  nom: string;

  @IsString()
  @Length(1, 100)
  prenom: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 255)
  mot_de_passe: string;

  @IsOptional()
  @IsString()
  @Length(1, 20)
  role?: string;
}
