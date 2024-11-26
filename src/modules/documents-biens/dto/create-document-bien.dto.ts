import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentBienDto {
  @ApiProperty()
  @IsUUID()
  bien_id: string;

  @ApiProperty()
  @IsString()
  nom_document: string;

  @ApiProperty()
  @IsString()
  chemin_document: string;

  @ApiProperty()
  @IsString()
  type_document: string;

  @ApiProperty()
  @IsUUID()
  ajout_par: string;
}