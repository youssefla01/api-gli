import { Model } from 'sequelize-typescript';
export declare class Administrateur extends Model {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    mot_de_passe: string;
    role: string;
    dernier_login: Date;
    date_creation: Date;
    date_mise_a_jour: Date;
}
