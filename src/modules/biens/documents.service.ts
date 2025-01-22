import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DocumentBien } from 'src/models/document-bien.model';
import { join } from 'path';
import { existsSync, unlinkSync } from 'fs';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(DocumentBien)
    private documentModel: typeof DocumentBien,
  ) {}

  async saveDocuments(bienId: string, documents: Express.Multer.File[]): Promise<void> {
    console.log('Saving documents for bien:', bienId);
    console.log('Documents to save:', documents);

    for (const document of documents) {
      try {
        const savedDoc = await this.documentModel.create({
          bienId,
          filename: document.filename,
          path: document.path,
        });
        console.log('Saved document:', savedDoc.toJSON());
      } catch (error) {
        console.error('Error saving document:', error);
        throw error;
      }
    }
  }

  async deleteDocument(documentId: string): Promise<void> {
    const document = await this.documentModel.findByPk(documentId);
    if (document) {
      const filePath = join(process.cwd(), document.path);
      if (existsSync(filePath)) {
        unlinkSync(filePath);
      }
      await document.destroy();
    }
  }

  async deleteDocumentsByBienId(bienId: string): Promise<void> {
    const documents = await this.documentModel.findAll({ where: { bienId } });
    for (const document of documents) {
      await this.deleteDocument(document.id);
    }
  }
}