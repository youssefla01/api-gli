// src/modules/files/utils/file-helper.util.ts

import { extname } from 'path';
import * as mime from 'mime-types';
import { v4 as uuidv4 } from 'uuid';
import { ALLOWED_IMAGE_TYPES, ALLOWED_DOCUMENT_TYPES } from '../constants/mime-types.constant';

export class FileHelper {
  // Ajout de la nouvelle méthode generateFileName
  static generateFileName(file: Express.Multer.File): string {
    const uniqueId = uuidv4();
    const extension = this.getFileExtension(file);
    return `${uniqueId}${extension}`;
  }

  static getFileExtension(file: Express.Multer.File): string {
    let extension = extname(file.originalname).toLowerCase();
    
    if (!extension && file.mimetype) {
      extension = `.${mime.extension(file.mimetype)}`;
    }
    
    if (!extension) {
      if (this.isImage(file)) {
        extension = '.jpg';
      } else if (this.isDocument(file)) {
        extension = '.pdf';
      } else {
        extension = '.bin';
      }
    }
    
    return extension;
  }

  static isImage(file: Express.Multer.File): boolean {
    return ALLOWED_IMAGE_TYPES.includes(file.mimetype);
  }

  static isDocument(file: Express.Multer.File): boolean {
    return ALLOWED_DOCUMENT_TYPES.includes(file.mimetype);
  }

  static validateFile(file: Express.Multer.File, type: 'image' | 'document'): boolean {
    if (type === 'image') {
      return this.isImage(file);
    }
    return this.isDocument(file);
  }
}
