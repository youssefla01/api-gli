import { PartialType } from '@nestjs/swagger';
import { CreateDocumentBienDto } from './create-document-bien.dto';

export class UpdateDocumentBienDto extends PartialType(CreateDocumentBienDto) {}