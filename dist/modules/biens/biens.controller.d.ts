import { BiensService } from './biens.service';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';
export declare class BiensController {
    private readonly biensService;
    constructor(biensService: BiensService);
    create(createBienDto: CreateBienDto): Promise<import("../../models/bien.model").Bien>;
    findAll(): Promise<import("../../models/bien.model").Bien[]>;
    findOne(id: string): Promise<import("../../models/bien.model").Bien>;
    findByProprietaire(id: string): Promise<import("../../models/bien.model").Bien[]>;
    update(id: string, updateBienDto: UpdateBienDto): Promise<import("../../models/bien.model").Bien>;
    remove(id: string): Promise<void>;
}
