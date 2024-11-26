import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DocumentsBiensService } from './documents-biens.service';
import { DocumentsBiensController } from './documents-biens.controller';
import { DocumentBien } from '../../models/document-bien.model';

@Module({
  imports: [SequelizeModule.forFeature([DocumentBien])],
  controllers: [DocumentsBiensController],
  providers: [DocumentsBiensService],
  exports: [DocumentsBiensService],
})
export class DocumentsBiensModule {}