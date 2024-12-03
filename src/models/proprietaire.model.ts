import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { Bien } from './bien.model';
import { ReleveMensuel } from './releve-mensuel.model';

@Table({ tableName: 'proprietaires' })
export class Proprietaire extends Model {
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

  @Column(DataType.STRING(15))
  numero_urgence: string;

  @Column(DataType.TEXT)
  adresse: string;

  @Column(DataType.STRING(50))
  identifiant_fiscal: string;

  @Column(DataType.STRING(34))
  rib: string;

  @Column(DataType.STRING(255))
  piece_jointe: string; // Stocke le nom ou le chemin du fichier joint

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  date_creation: Date;

  @Column(DataType.DATE)
  date_mise_a_jour: Date;

  @HasMany(() => Bien)
  biens: Bien[];

  @HasMany(() => ReleveMensuel)
  releves: ReleveMensuel[];
}
