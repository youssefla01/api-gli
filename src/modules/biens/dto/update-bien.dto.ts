import { PartialType } from '@nestjs/swagger';
import { CreateBienDto } from './create-bien.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBienDto extends PartialType(CreateBienDto) {
  @ApiProperty({ required: false, type: [String] })
  existingPhotos?: string[];

  @ApiProperty({ required: false, type: [String] })
  existingDocuments?: string[];
}