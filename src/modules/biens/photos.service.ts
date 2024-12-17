import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';


import { PhotoBien } from 'src/models/photo-bien.model';
import { FileHelper } from '../FilesModule/utils/file-helper.util';

@Injectable()
export class PhotosService {
  constructor(
    @InjectModel(PhotoBien) private photoBienModel: typeof PhotoBien,
  ) {}

  async savePhotos(bienId: string, photos: Express.Multer.File[]): Promise<void> {
    try {
      // Validation des extensions
      photos.forEach(photo => {
        if (!FileHelper.isImage(photo)) {
          throw new BadRequestException(`Format de photo invalide pour ${photo.originalname}`);
        }
      });

      // Création des entrées dans la base de données
      const photosToSave = photos.map(photo => ({
        bien_id: bienId,
        url: photo.path,
        description: `Photo pour le bien ${bienId}`,
        originalname: photo.originalname,
      }));

      await this.photoBienModel.bulkCreate(photosToSave);
    } catch (error) {
      throw new BadRequestException(
        `Erreur lors de la sauvegarde des photos : ${error.message}`,
      );
    }
  }
}