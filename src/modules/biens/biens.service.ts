import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bien } from '../../models/bien.model';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';
import { PhotosService } from './photos.service';
import { DocumentsService } from './documents.service';
;

@Injectable()
export class BiensService {
  constructor(
    @InjectModel(Bien) private bienModel: typeof Bien,
    private readonly photosService: PhotosService,
    private readonly documentsService: DocumentsService,
  ) {}

  async create(
    createBienDto: CreateBienDto,
    uploadedPhotos?: Express.Multer.File[],
    uploadedDocuments?: Express.Multer.File[],
  ): Promise<Bien> {
    try {
      // Création du bien
      const bien = await this.bienModel.create({
        ...createBienDto,
        date_creation: new Date(),
      });

      // Gestion des photos
      if (uploadedPhotos?.length) {
        await this.photosService.savePhotos(bien.id, uploadedPhotos);
      }

      // Gestion des documents
      if (uploadedDocuments?.length) {
        await this.documentsService.saveDocuments(bien.id, uploadedDocuments);
      }

      return bien;
    } catch (error) {
      throw new InternalServerErrorException(
        `Erreur lors de la création du bien : ${error.message}`,
      );
    }
  }




  async findAll(): Promise<Bien[]> {
    return this.bienModel.findAll({
      include: ['proprietaire', 'documents', 'baux'],
    });
  }

  async findOne(id: string): Promise<Bien> {
    const bien = await this.bienModel.findByPk(id, {
      include: ['proprietaire', 'documents', 'baux'],
    });

    if (!bien) {
      throw new NotFoundException(`Bien avec l'ID ${id} non trouvé`);
    }

    return bien;
  }

  async update(id: string, updateBienDto: UpdateBienDto): Promise<Bien> {
    const bien = await this.findOne(id);
    
    await bien.update({
      ...updateBienDto,
      date_mise_a_jour: new Date(),
    });

    return bien;
  }

  async remove(id: string): Promise<void> {
    const bien = await this.findOne(id);
    await bien.destroy();
  }

  async findByProprietaire(proprietaireId: string): Promise<Bien[]> {
    return this.bienModel.findAll({
      where: { proprietaire_id: proprietaireId },
      include: ['documents', 'baux'],
    });
  }
}
