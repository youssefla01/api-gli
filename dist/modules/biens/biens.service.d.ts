import { Bien } from '../../models/bien.model';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';
export declare class BiensService {
    private bienModel;
    constructor(bienModel: typeof Bien);
    create(createBienDto: CreateBienDto): Promise<Bien>;
    findAll(): Promise<Bien[]>;
    findOne(id: string): Promise<Bien>;
    update(id: string, updateBienDto: UpdateBienDto): Promise<Bien>;
    remove(id: string): Promise<void>;
    findByProprietaire(proprietaireId: string): Promise<Bien[]>;
}
