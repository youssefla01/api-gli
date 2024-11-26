import { Bail } from '../../models/bail.model';
import { CreateBailDto } from './dto/create-bail.dto';
import { UpdateBailDto } from './dto/update-bail.dto';
export declare class BauxService {
    private bailModel;
    constructor(bailModel: typeof Bail);
    create(createBailDto: CreateBailDto): Promise<Bail>;
    findAll(): Promise<Bail[]>;
    findOne(id: string): Promise<Bail>;
    update(id: string, updateBailDto: UpdateBailDto): Promise<Bail>;
    remove(id: string): Promise<void>;
    findByProprietaire(proprietaireId: string): Promise<Bail[]>;
    findByLocataire(locataireId: string): Promise<Bail[]>;
    findByBien(bienId: string): Promise<Bail[]>;
}
