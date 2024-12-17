import { BiensService } from './biens.service';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';
import { FilesService } from '../FilesModule/files.service';
export declare class BiensController {
    private readonly biensService;
    private readonly filesService;
    constructor(biensService: BiensService, filesService: FilesService);
    create(createBienDto: CreateBienDto, files: {
        photos?: Express.Multer.File[];
        documents?: Express.Multer.File[];
    }): Promise<{
        status: number;
        message: string;
        data: import("../../models/bien.model").Bien;
    }>;
    findAll(): Promise<import("../../models/bien.model").Bien[]>;
    findOne(id: string): Promise<import("../../models/bien.model").Bien>;
    findByProprietaire(id: string): Promise<import("../../models/bien.model").Bien[]>;
    update(id: string, updateBienDto: UpdateBienDto): Promise<import("../../models/bien.model").Bien>;
    remove(id: string): Promise<void>;
}
