import { Model } from 'sequelize-typescript';
export declare class Notification extends Model {
    id: string;
    utilisateur_id: string;
    type_notification: string;
    message: string;
    statut: string;
    date_envoi: Date;
    date_lecture: Date;
}
