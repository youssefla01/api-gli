import { ProprietairesService } from './proprietaires.service';
import { CreateProprietaireDto } from './dto/create-proprietaire.dto';
import { UpdateProprietaireDto } from './dto/update-proprietaire.dto';
export declare class ProprietairesController {
    private readonly proprietairesService;
    constructor(proprietairesService: ProprietairesService);
    create(createProprietaireDto: CreateProprietaireDto): Promise<import("../../models/proprietaire.model").Proprietaire>;
    findAll(): Promise<import("../../models/proprietaire.model").Proprietaire[]>;
    findOne(id: string): Promise<import("../../models/proprietaire.model").Proprietaire>;
    update(id: string, updateProprietaireDto: UpdateProprietaireDto): Promise<import("../../models/proprietaire.model").Proprietaire>;
    remove(id: string): Promise<void>;
}
