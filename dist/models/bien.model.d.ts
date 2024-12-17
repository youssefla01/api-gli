import { Model } from 'sequelize-typescript';
import { Proprietaire } from './proprietaire.model';
import { DocumentBien } from './document-bien.model';
import { Bail } from './bail.model';
import { PhotoBien } from './photo-bien.model';
export declare class Bien extends Model {
    id: string;
    type: string;
    adresse: string;
    description: string;
    surface: number;
    nb_pieces: number;
    etat: string;
    proprietaire_id: string;
    proprietaire: Proprietaire;
    date_creation: Date;
    date_mise_a_jour: Date;
    documents: DocumentBien[];
    baux: Bail[];
    prix: number;
    photos: PhotoBien[];
    ref_compteur_eau: string;
    ref_compteur_electricite: string;
}
