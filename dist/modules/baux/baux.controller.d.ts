import { BauxService } from './baux.service';
import { CreateBailDto } from './dto/create-bail.dto';
import { UpdateBailDto } from './dto/update-bail.dto';
export declare class BauxController {
    private readonly bauxService;
    constructor(bauxService: BauxService);
    create(createBailDto: CreateBailDto): Promise<import("../../models/bail.model").Bail>;
    findAll(): Promise<import("../../models/bail.model").Bail[]>;
    findOne(id: string): Promise<import("../../models/bail.model").Bail>;
    findByProprietaire(id: string): Promise<import("../../models/bail.model").Bail[]>;
    findByLocataire(id: string): Promise<import("../../models/bail.model").Bail[]>;
    findByBien(id: string): Promise<import("../../models/bail.model").Bail[]>;
    update(id: string, updateBailDto: UpdateBailDto): Promise<import("../../models/bail.model").Bail>;
    remove(id: string): Promise<void>;
}
