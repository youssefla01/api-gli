import { ReleveMensuel } from '../../models/releve-mensuel.model';
import { CreateReleveMensuelDto } from './dto/create-releve-mensuel.dto';
import { UpdateReleveMensuelDto } from './dto/update-releve-mensuel.dto';
export declare class RelevesMensuelsService {
    private releveMensuelModel;
    constructor(releveMensuelModel: typeof ReleveMensuel);
    create(createReleveMensuelDto: CreateReleveMensuelDto): Promise<ReleveMensuel>;
    findAll(): Promise<ReleveMensuel[]>;
    findOne(id: string): Promise<ReleveMensuel>;
    update(id: string, updateReleveMensuelDto: UpdateReleveMensuelDto): Promise<ReleveMensuel>;
    remove(id: string): Promise<void>;
    findByProprietaire(proprietaireId: string): Promise<ReleveMensuel[]>;
    findByPeriode(mois: number, annee: number): Promise<ReleveMensuel[]>;
}
