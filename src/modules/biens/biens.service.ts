import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bien } from '../../models/bien.model';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';
import { PhotosService } from './photos.service';
import { DocumentsService } from './documents.service';
import { Photo } from 'src/models/photo.model';
import { DocumentBien } from 'src/models/document-bien.model';


export interface BienResponse {
  id: string;
  type: string;
  adresse: string;
  description: string;
  surface: number;
  nb_pieces: number;
  etat: string;
  proprietaire_id: string;
  proprietaire: any;
  photos: string[];
  documents: any[];
  baux: any[];
  prix: number;
  date_creation: Date;
  date_mise_a_jour: Date;
  ref_compteur_eau: string;
  ref_compteur_electricite: string;
}

@Injectable()
export class BiensService {
  constructor(
    @InjectModel(Bien) private bienModel: typeof Bien,
    @InjectModel(Photo) private photoModel: typeof Photo,
    @InjectModel(DocumentBien) private documentModel: typeof DocumentBien,
    private readonly photosService: PhotosService,
    private readonly documentsService: DocumentsService,
  ) {}

  private getPhotoUrl(filename: string): string {
    const baseUrl = process.env.API_URL || 'http://localhost:3000';
    return `${baseUrl}/uploads/photos/${filename}`;
  }

  private getDocumentUrl(filename: string): string {
    const baseUrl = process.env.API_URL || 'http://localhost:3000';
    return `${baseUrl}/uploads/documents/${filename}`;
  }

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

  async findAll(): Promise<BienResponse[]> {
    const biens = await this.bienModel.findAll({
      include: [
        {
          model: Photo,
          as: 'photos',
          attributes: ['id', 'filename', 'path']
        },
        'proprietaire',
        'documents',
        'baux'
      ]
    });

    return biens.map(bien => {
      const plainBien = bien.toJSON();
      return {
        ...plainBien,
        photos: plainBien.photos?.map(photo => this.getPhotoUrl(photo.filename)) || []
      };
    });
  }

  async findOne(id: string): Promise<BienResponse> {
    const bien = await this.bienModel.findByPk(id, {
      include: [
        {
          model: Photo,
          as: 'photos',
          attributes: ['id', 'filename', 'path']
        },
        {
          model: DocumentBien,
          as: 'documents',
          attributes: ['id', 'filename', 'path']
        },
        'proprietaire',
        'baux'
      ]
    });

    if (!bien) {
      throw new NotFoundException(`Bien avec l'ID ${id} non trouvé`);
    }

    const plainBien = bien.toJSON();
    return {
      ...plainBien,
      photos: plainBien.photos?.map(photo => this.getPhotoUrl(photo.filename)) || [],
      documents: plainBien.documents?.map(doc => ({
        id: doc.id,
        url: this.getDocumentUrl(doc.filename),
        name: doc.filename
      })) || []
    };
  }

  async update(
    id: string,
    updateBienDto: UpdateBienDto & {
      photos?: Express.Multer.File[];
      documents?: Express.Multer.File[];
      existingPhotos?: string[];
      existingDocuments?: string[];
    }
  ): Promise<BienResponse> {
    const bienModel = await this.bienModel.findByPk(id);
    if (!bienModel) {
      throw new NotFoundException(`Bien avec l'ID ${id} non trouvé`);
    }

    const { photos, documents, existingPhotos, existingDocuments, ...bienData } = updateBienDto;

    // Mettre à jour les informations de base
    await bienModel.update({
      ...bienData,
      date_mise_a_jour: new Date(),
    });

    // Gérer les photos
    const currentPhotos = await this.photoModel.findAll({ where: { bienId: id } });
    for (const photo of currentPhotos) {
      if (!existingPhotos?.includes(photo.id)) {
        await this.photosService.deletePhoto(photo.id);
      }
    }

    // Gérer les documents
    const currentDocuments = await this.documentModel.findAll({ where: { bienId: id } });
    for (const document of currentDocuments) {
      if (!existingDocuments?.includes(document.id)) {
        await this.documentsService.deleteDocument(document.id);
      }
    }

    // Ajouter les nouveaux fichiers
    if (photos?.length) await this.photosService.savePhotos(id, photos);
    if (documents?.length) await this.documentsService.saveDocuments(id, documents);

    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const bienModel = await this.bienModel.findByPk(id);
    if (!bienModel) {
      throw new NotFoundException(`Bien avec l'ID ${id} non trouvé`);
    }
    await bienModel.destroy();
  }

  async findByProprietaire(proprietaireId: string): Promise<Bien[]> {
    return this.bienModel.findAll({
      where: { proprietaire_id: proprietaireId },
      include: ['documents', 'baux'],
    });
  }
}
