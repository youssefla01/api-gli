import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DocumentBien } from 'src/models/document-bien.model';
import { FileHelper } from '../FilesModule/utils/file-helper.util';


@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(DocumentBien) private documentBienModel: typeof DocumentBien,
  ) {}

  async saveDocuments(bienId: string, documents: Express.Multer.File[]): Promise<void> {
    try {
      // Validation des extensions
      documents.forEach(document => {
        if (!FileHelper.isDocument(document)) {
          throw new BadRequestException(`Format de document invalide pour ${document.originalname}`);
        }
      });

      // Création des entrées dans la base de données
      const documentsToSave = documents.map(document => ({
        bien_id: bienId,
        nom_document: document.originalname,
        chemin_document: document.path,
        type_document: 'document',
      }));

      await this.documentBienModel.bulkCreate(documentsToSave);
    } catch (error) {
      throw new BadRequestException(
        `Erreur lors de la sauvegarde des documents : ${error.message}`,
      );
    }
  }
}