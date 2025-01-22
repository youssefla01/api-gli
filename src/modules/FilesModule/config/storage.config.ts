// src/modules/files/config/storage.config.ts

import { diskStorage } from 'multer';
import { FileHelper } from '../utils/file-helper.util';

export const createStorage = (subFolder: string) => {
  return diskStorage({
    destination: (req, file, callback) => {
      const path = `./uploads/${subFolder}`;
      callback(null, path);
    },
    filename: (req, file, callback) => {
      const fileName = FileHelper.generateFileName(file);
      console.log(`Saving file: ${fileName} (${file.mimetype})`);
      callback(null, fileName);
    }
  });
};
