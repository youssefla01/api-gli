import { IsEmail, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
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
  @Length(6, 20)
  mot_de_passe: string;
}