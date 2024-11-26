import { DocumentsBiensService } from './documents-biens.service';
import { CreateDocumentBienDto } from './dto/create-document-bien.dto';
import { UpdateDocumentBienDto } from './dto/update-document-bien.dto';
export declare class DocumentsBiensController {
    private readonly documentsBiensService;
    constructor(documentsBiensService: DocumentsBiensService);
    create(createDocumentBienDto: CreateDocumentBienDto): Promise<import("../../models/document-bien.model").DocumentBien>;
    findAll(): Promise<import("../../models/document-bien.model").DocumentBien[]>;
    findOne(id: string): Promise<import("../../models/document-bien.model").DocumentBien>;
    findByBien(id: string): Promise<import("../../models/document-bien.model").DocumentBien[]>;
    findByType(type: string): Promise<import("../../models/document-bien.model").DocumentBien[]>;
    update(id: string, updateDocumentBienDto: UpdateDocumentBienDto): Promise<import("../../models/document-bien.model").DocumentBien>;
    remove(id: string): Promise<void>;
}
