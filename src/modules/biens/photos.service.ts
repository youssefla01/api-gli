import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { join } from 'path';
import { existsSync, unlinkSync } from 'fs';

import { FileHelper } from '../FilesModule/utils/file-helper.util';
import { Photo } from 'src/models/photo.model';

@Injectable()
export class PhotosService {
  constructor(
    @InjectModel(Photo)
    private photoModel: typeof Photo,
  ) {}

  async savePhotos(bienId: string, photos: Express.Multer.File[]): Promise<void> {
    for (const photo of photos) {
      await this.photoModel.create({
        bienId,
        filename: photo.filename,
        path: photo.path,
      });
    }
  }

  async deletePhoto(photoId: string): Promise<void> {
    const photo = await this.photoModel.findByPk(photoId);
    if (photo) {
      // Supprimer le fichier physique
      const filePath = join(process.cwd(), photo.path);
      if (existsSync(filePath)) {
        unlinkSync(filePath);
      }
      await photo.destroy();
    }
  }

  async deletePhotosByBienId(bienId: string): Promise<void> {
    const photos = await this.photoModel.findAll({ where: { bienId } });
    for (const photo of photos) {
      await this.deletePhoto(photo.id);
    }
  }
}