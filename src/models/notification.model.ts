import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'notifications' })
export class Notification extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column(DataType.UUID)
  utilisateur_id: string;

  @Column(DataType.STRING(100))
  type_notification: string;

  @Column(DataType.TEXT)
  message: string;

  @Column({ type: DataType.STRING(20), defaultValue: 'Non lu' })
  statut: string;

  @Column(DataType.DATE)
  date_envoi: Date;

  @Column(DataType.DATE)
  date_lecture: Date;
}