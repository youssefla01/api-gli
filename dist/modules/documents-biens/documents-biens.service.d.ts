import { DocumentBien } from '../../models/document-bien.model';
import { CreateDocumentBienDto } from './dto/create-document-bien.dto';
import { UpdateDocumentBienDto } from './dto/update-document-bien.dto';
export declare class DocumentsBiensService {
    private documentBienModel;
    constructor(documentBienModel: typeof DocumentBien);
    create(createDocumentBienDto: CreateDocumentBienDto): Promise<DocumentBien>;
    findAll(): Promise<DocumentBien[]>;
    findOne(id: string): Promise<DocumentBien>;
    update(id: string, updateDocumentBienDto: UpdateDocumentBienDto): Promise<DocumentBien>;
    remove(id: string): Promise<void>;
    findByBien(bienId: string): Promise<DocumentBien[]>;
    findByType(type: string): Promise<DocumentBien[]>;
}
