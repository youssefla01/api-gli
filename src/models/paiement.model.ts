import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Bail } from './bail.model';

@Table({ tableName: 'paiements' })
export class Paiement extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Bail)
  @Column(DataType.UUID)
  bail_id: string;

  @Column(DataType.DECIMAL(10, 2))
  montant_paiement: number;

  @Column(DataType.DATEONLY)
  date_paiement: Date;

  @Column(DataType.STRING(50))
  methode_paiement: string;

  @Column({ type: DataType.STRING(20), defaultValue: 'En attente' })
  statut: string;

  @Column(DataType.TEXT)
  recu_document: string;

  @Column(DataType.DECIMAL(10, 2))
  commission_agence: number;

  @Column(DataType.DECIMAL(10, 2))
  revenu_net_proprietaire: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  date_creation: Date;

  @Column(DataType.DATE)
  date_mise_a_jour: Date;

  @BelongsTo(() => Bail)
  bail: Bail;
}