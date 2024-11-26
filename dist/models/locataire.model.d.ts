import { Model } from 'sequelize-typescript';
import { Bail } from './bail.model';
export declare class Locataire extends Model {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    adresse: string;
    piece_identite: string;
    statut: string;
    date_creation: Date;
    date_mise_a_jour: Date;
    baux: Bail[];
}
