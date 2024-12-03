import { Model } from 'sequelize-typescript';
import { Bail } from './bail.model';
export declare class Locataire extends Model {
    id: string;
    nom: string;
    prenom: string;
    date_naissance?: Date;
    lieu_naissance: string;
    genre: string;
    situation_familiale: string;
    nombre_enfants: number;
    nationalite: string;
    telephone: string;
    email: string;
    adresse: string;
    contact_urgence: string;
    cin: string;
    piece_identite: string;
    piece_jointe: string;
    commentaire: string;
    statut: string;
    date_creation: Date;
    date_mise_a_jour: Date;
    baux: Bail[];
}
