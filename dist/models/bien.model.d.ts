import { Model } from 'sequelize-typescript';
import { Proprietaire } from './proprietaire.model';
import { DocumentBien } from './document-bien.model';
import { Bail } from './bail.model';
export declare class Bien extends Model {
    id: string;
    type: string;
    adresse: string;
    description: string;
    surface: number;
    nb_pieces: number;
    etat: string;
    prix_estimatif: number;
    proprietaire_id: string;
    date_creation: Date;
    date_mise_a_jour: Date;
    proprietaire: Proprietaire;
    documents: DocumentBien[];
    baux: Bail[];
}
