import { Proprietaire } from '../../models/proprietaire.model';
import { CreateProprietaireDto } from './dto/create-proprietaire.dto';
import { UpdateProprietaireDto } from './dto/update-proprietaire.dto';
export declare class ProprietairesService {
    private proprietaireModel;
    constructor(proprietaireModel: typeof Proprietaire);
    create(createProprietaireDto: CreateProprietaireDto): Promise<Proprietaire>;
    findAll(): Promise<Proprietaire[]>;
    findOne(id: string): Promise<Proprietaire>;
    update(id: string, updateProprietaireDto: UpdateProprietaireDto): Promise<Proprietaire>;
    remove(id: string): Promise<void>;
}
