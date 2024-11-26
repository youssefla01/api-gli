import { PartialType } from '@nestjs/swagger';
import { CreateBailDto } from './create-bail.dto';

export class UpdateBailDto extends PartialType(CreateBailDto) {}