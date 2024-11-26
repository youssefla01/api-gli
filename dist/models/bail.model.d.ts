import { Model } from 'sequelize-typescript';
import { Bien } from './bien.model';
import { Locataire } from './locataire.model';
import { Proprietaire } from './proprietaire.model';
import { Paiement } from './paiement.model';
export declare class Bail extends Model {
    id: string;
    bien_id: string;
    locataire_id: string;
    proprietaire_id: string;
    date_debut: Date;
    date_fin: Date;
    montant_loyer: number;
    depot_garantie: number;
    commission_agence: number;
    statut: string;
    document_bail: string;
    date_creation: Date;
    date_mise_a_jour: Date;
    bien: Bien;
    locataire: Locataire;
    proprietaire: Proprietaire;
    paiements: Paiement[];
}
