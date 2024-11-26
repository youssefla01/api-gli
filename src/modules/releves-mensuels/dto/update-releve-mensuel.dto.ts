import { PartialType } from '@nestjs/swagger';
import { CreateReleveMensuelDto } from './create-releve-mensuel.dto';

export class UpdateReleveMensuelDto extends PartialType(CreateReleveMensuelDto) {}