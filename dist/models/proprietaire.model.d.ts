import { Model } from 'sequelize-typescript';
import { Bien } from './bien.model';
import { ReleveMensuel } from './releve-mensuel.model';
export declare class Proprietaire extends Model {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    numero_urgence: string;
    adresse: string;
    identifiant_fiscal: string;
    rib: string;
    piece_jointe: string;
    date_creation: Date;
    date_mise_a_jour: Date;
    biens: Bien[];
    releves: ReleveMensuel[];
}
