import { Model } from 'sequelize-typescript';
import { Proprietaire } from './proprietaire.model';
import { Administrateur } from './administrateur.model';
export declare class ReleveMensuel extends Model {
    id: string;
    proprietaire_id: string;
    mois: number;
    annee: number;
    total_revenus: number;
    total_commission: number;
    document_releve: string;
    genere_par: string;
    date_creation: Date;
    proprietaire: Proprietaire;
    administrateur: Administrateur;
}
