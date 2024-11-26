import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Proprietaire } from './proprietaire.model';
import { Administrateur } from './administrateur.model';

@Table({ tableName: 'releves_mensuels' })
export class ReleveMensuel extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Proprietaire)
  @Column(DataType.UUID)
  proprietaire_id: string;

  @Column(DataType.INTEGER)
  mois: number;

  @Column(DataType.INTEGER)
  annee: number;

  @Column(DataType.DECIMAL(10, 2))
  total_revenus: number;

  @Column(DataType.DECIMAL(10, 2))
  total_commission: number;

  @Column(DataType.TEXT)
  document_releve: string;

  @ForeignKey(() => Administrateur)
  @Column(DataType.UUID)
  genere_par: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  date_creation: Date;

  @BelongsTo(() => Proprietaire)
  proprietaire: Proprietaire;

  @BelongsTo(() => Administrateur)
  administrateur: Administrateur;
}