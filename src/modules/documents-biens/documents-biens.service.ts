import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DocumentBien } from '../../models/document-bien.model';
import { CreateDocumentBienDto } from './dto/create-document-bien.dto';
import { UpdateDocumentBienDto } from './dto/update-document-bien.dto';

@Injectable()
export class DocumentsBiensService {
  constructor(
    @InjectModel(DocumentBien)
    private documentBienModel: typeof DocumentBien,
  ) {}

  async create(createDocumentBienDto: CreateDocumentBienDto): Promise<DocumentBien> {
    return this.documentBienModel.create({
      ...createDocumentBienDto,
      date_ajout: new Date(),
    });
  }

  async findAll(): Promise<DocumentBien[]> {
    return this.documentBienModel.findAll({
      include: ['bien', 'administrateur'],
    });
  }

  async findOne(id: string): Promise<DocumentBien> {
    const document = await this.documentBienModel.findByPk(id, {
      include: ['bien', 'administrateur'],
    });

    if (!document) {
      throw new NotFoundException(`Document avec l'ID ${id} non trouvé`);
    }

    return document;
  }

  async update(id: string, updateDocumentBienDto: UpdateDocumentBienDto): Promise<DocumentBien> {
    const document = await this.findOne(id);
    await document.update(updateDocumentBienDto);
    return document;
  }

  async remove(id: string): Promise<void> {
    const document = await this.findOne(id);
    await document.destroy();
  }

  async findByBien(bienId: string): Promise<DocumentBien[]> {
    return this.documentBienModel.findAll({
      where: { bien_id: bienId },
      include: ['administrateur'],
    });
  }

  async findByType(type: string): Promise<DocumentBien[]> {
    return this.documentBienModel.findAll({
      where: { type_document: type },
      include: ['bien', 'administrateur'],
    });
  }
}