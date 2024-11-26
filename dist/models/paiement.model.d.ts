import { Model } from 'sequelize-typescript';
import { Bail } from './bail.model';
export declare class Paiement extends Model {
    id: string;
    bail_id: string;
    montant_paiement: number;
    date_paiement: Date;
    methode_paiement: string;
    statut: string;
    recu_document: string;
    commission_agence: number;
    revenu_net_proprietaire: number;
    date_creation: Date;
    date_mise_a_jour: Date;
    bail: Bail;
}
