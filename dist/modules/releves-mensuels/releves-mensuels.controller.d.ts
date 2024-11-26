import { RelevesMensuelsService } from './releves-mensuels.service';
import { CreateReleveMensuelDto } from './dto/create-releve-mensuel.dto';
import { UpdateReleveMensuelDto } from './dto/update-releve-mensuel.dto';
export declare class RelevesMensuelsController {
    private readonly relevesMensuelsService;
    constructor(relevesMensuelsService: RelevesMensuelsService);
    create(createReleveMensuelDto: CreateReleveMensuelDto): Promise<import("../../models/releve-mensuel.model").ReleveMensuel>;
    findAll(): Promise<import("../../models/releve-mensuel.model").ReleveMensuel[]>;
    findOne(id: string): Promise<import("../../models/releve-mensuel.model").ReleveMensuel>;
    findByProprietaire(id: string): Promise<import("../../models/releve-mensuel.model").ReleveMensuel[]>;
    findByPeriode(mois: number, annee: number): Promise<import("../../models/releve-mensuel.model").ReleveMensuel[]>;
    update(id: string, updateReleveMensuelDto: UpdateReleveMensuelDto): Promise<import("../../models/releve-mensuel.model").ReleveMensuel>;
    remove(id: string): Promise<void>;
}
