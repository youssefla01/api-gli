import { PaiementsService } from './paiements.service';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';
export declare class PaiementsController {
    private readonly paiementsService;
    constructor(paiementsService: PaiementsService);
    create(createPaiementDto: CreatePaiementDto): Promise<import("../../models/paiement.model").Paiement>;
    findAll(): Promise<import("../../models/paiement.model").Paiement[]>;
    findOne(id: string): Promise<import("../../models/paiement.model").Paiement>;
    findByBail(id: string): Promise<import("../../models/paiement.model").Paiement[]>;
    findByPeriode(debut: Date, fin: Date): Promise<import("../../models/paiement.model").Paiement[]>;
    update(id: string, updatePaiementDto: UpdatePaiementDto): Promise<import("../../models/paiement.model").Paiement>;
    remove(id: string): Promise<void>;
}
