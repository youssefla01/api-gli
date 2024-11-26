import { Model } from 'sequelize-typescript';
import { Bien } from './bien.model';
import { Administrateur } from './administrateur.model';
export declare class DocumentBien extends Model {
    id: string;
    bien_id: string;
    nom_document: string;
    chemin_document: string;
    type_document: string;
    date_ajout: Date;
    ajout_par: string;
    bien: Bien;
    administrateur: Administrateur;
}
