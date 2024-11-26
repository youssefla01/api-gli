import { Locataire } from '../../models/locataire.model';
import { CreateLocataireDto } from './dto/create-locataire.dto';
import { UpdateLocataireDto } from './dto/update-locataire.dto';
export declare class LocatairesService {
    private locataireModel;
    constructor(locataireModel: typeof Locataire);
    create(createLocataireDto: CreateLocataireDto): Promise<Locataire>;
    findAll(): Promise<Locataire[]>;
    findOne(id: string): Promise<Locataire>;
    update(id: string, updateLocataireDto: UpdateLocataireDto): Promise<Locataire>;
    remove(id: string): Promise<void>;
}
