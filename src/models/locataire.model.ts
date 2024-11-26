import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { Bail } from './bail.model';

@Table({ tableName: 'locataires' })
export class Locataire extends Model {
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

  @Column(DataType.STRING(15))
  telephone: string;

  @Column(DataType.TEXT)
  adresse: string;

  @Column(DataType.TEXT)
  piece_identite: string;

  @Column({ type: DataType.STRING(20), defaultValue: 'Actif' })
  statut: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  date_creation: Date;

  @Column(DataType.DATE)
  date_mise_a_jour: Date;

  @HasMany(() => Bail)
  baux: Bail[];
}