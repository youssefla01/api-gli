import { LocatairesService } from './locataires.service';
import { CreateLocataireDto } from './dto/create-locataire.dto';
import { UpdateLocataireDto } from './dto/update-locataire.dto';
export declare class LocatairesController {
    private readonly locatairesService;
    constructor(locatairesService: LocatairesService);
    create(createLocataireDto: CreateLocataireDto): Promise<import("../../models/locataire.model").Locataire>;
    findAll(): Promise<import("../../models/locataire.model").Locataire[]>;
    findOne(id: string): Promise<import("../../models/locataire.model").Locataire>;
    update(id: string, updateLocataireDto: UpdateLocataireDto): Promise<import("../../models/locataire.model").Locataire>;
    remove(id: string): Promise<void>;
}
