import { Paiement } from '../../models/paiement.model';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';
export declare class PaiementsService {
    private paiementModel;
    constructor(paiementModel: typeof Paiement);
    create(createPaiementDto: CreatePaiementDto): Promise<Paiement>;
    findAll(): Promise<Paiement[]>;
    findOne(id: string): Promise<Paiement>;
    update(id: string, updatePaiementDto: UpdatePaiementDto): Promise<Paiement>;
    remove(id: string): Promise<void>;
    findByBail(bailId: string): Promise<Paiement[]>;
    findByPeriode(debut: Date, fin: Date): Promise<Paiement[]>;
}
