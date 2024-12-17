// src/modules/files/files.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { FileHelper } from './utils/file-helper.util';

@Injectable()
export class FilesService {
  constructor() {
    // Créer les dossiers d'upload au démarrage
    ['uploads', 'uploads/photos', 'uploads/documents'].forEach(dir => {
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
    });
  }

  getPhotoStorage() {
    return diskStorage({
      destination: './uploads/photos',
      filename: (req, file, callback) => {
        const fileName = FileHelper.generateFileName(file);
        callback(null, fileName);
      }
    });
  }

  getDocumentStorage() {
    return diskStorage({
      destination: './uploads/documents',
      filename: (req, file, callback) => {
        const fileName = FileHelper.generateFileName(file);
        callback(null, fileName);
      }
    });
  }

  validateFiles(files: Express.Multer.File[], type: 'image' | 'document'): void {
    if (!files || files.length === 0) return;
    
    files.forEach(file => {
      if (!FileHelper.validateFile(file, type)) {
        throw new BadRequestException(
          `Type de fichier invalide pour ${file.originalname}. Seuls les fichiers ${type} sont autorisés.`
        );
      }
    });
  }
}
