import { 
  IsEmail, 
  IsString, 
  IsOptional, 
  Length, 
  Matches 
} from 'class-validator';

export class CreateAdministrateurDto {
  @IsString()
  @Length(1, 100, { message: 'Le nom doit comporter entre 1 et 100 caractères.' })
  nom: string;

  @IsString()
  @Length(1, 100, { message: 'Le prénom doit comporter entre 1 et 100 caractères.' })
  prenom: string;

  @IsEmail({}, { message: "L'email doit être valide." })
  email: string;

  @IsString()
  @Length(8, 255, { message: 'Le mot de passe doit comporter au moins 8 caractères.' })
  @Matches(/(?=.*[A-Z])/, {
    message: 'Le mot de passe doit contenir au moins une majuscule.',
  })
  @Matches(/(?=.*[0-9])/, {
    message: 'Le mot de passe doit contenir au moins un chiffre.',
  })
  @Matches(/(?=.*[@$!%*?&])/, {
    message: 'Le mot de passe doit contenir au moins un caractère spécial (@, $, !, %, *, ?, &).',
  })
  mot_de_passe: string;

  @IsOptional()
  @IsString()
  @Length(1, 20, { message: 'Le rôle doit comporter entre 1 et 20 caractères.' })
  role?: string;
}
