import { Bien } from '../../models/bien.model';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';
import { PhotosService } from './photos.service';
import { DocumentsService } from './documents.service';
export declare class BiensService {
    private bienModel;
    private readonly photosService;
    private readonly documentsService;
    constructor(bienModel: typeof Bien, photosService: PhotosService, documentsService: DocumentsService);
    create(createBienDto: CreateBienDto, uploadedPhotos?: Express.Multer.File[], uploadedDocuments?: Express.Multer.File[]): Promise<Bien>;
    findAll(): Promise<Bien[]>;
    findOne(id: string): Promise<Bien>;
    update(id: string, updateBienDto: UpdateBienDto): Promise<Bien>;
    remove(id: string): Promise<void>;
    findByProprietaire(proprietaireId: string): Promise<Bien[]>;
}
