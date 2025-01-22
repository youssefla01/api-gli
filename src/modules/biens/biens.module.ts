// src/modules/biens/biens.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BiensController } from './biens.controller';
import { Bien } from '../../models/bien.model';

import { DocumentBien } from '../../models/document-bien.model';
import { FilesModule } from '../FilesModule/files.module';
import { BiensService } from './biens.service';
import { PhotosService } from './photos.service';
import { DocumentsService } from './documents.service';
import { Photo } from 'src/models/photo.model';


@Module({
  imports: [
    SequelizeModule.forFeature([Bien, Photo, DocumentBien]),
    FilesModule
  ],
  controllers: [BiensController],
  providers: [
    BiensService,
    PhotosService,
    DocumentsService
  ],
  exports: [BiensService],
})
export class BiensModule {}
