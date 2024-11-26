import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'administrateurs' })
export class Administrateur extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column(DataType.STRING(100))
  nom: string;

  @Column(DataType.STRING(100))
  prenom: string;

  @Column({ type: DataType.STRING(100), unique: true })
  email: string;

  @Column(DataType.STRING(255))
  mot_de_passe: string;

  @Column({ type: DataType.STRING(20), defaultValue: 'Admin' })
  role: string;

  @Column(DataType.DATE)
  dernier_login: Date;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  date_creation: Date;

  @Column(DataType.DATE)
  date_mise_a_jour: Date;
}