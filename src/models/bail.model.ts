import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Bien } from './bien.model';
import { Locataire } from './locataire.model';
import { Proprietaire } from './proprietaire.model';
import { Paiement } from './paiement.model';

@Table({ tableName: 'baux' })
export class Bail extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Bien)
  @Column(DataType.UUID)
  bien_id: string;

  @ForeignKey(() => Locataire)
  @Column(DataType.UUID)
  locataire_id: string;

  @ForeignKey(() => Proprietaire)
  @Column(DataType.UUID)
  proprietaire_id: string;

  @Column(DataType.DATEONLY)
  date_debut: Date;

  @Column(DataType.DATEONLY)
  date_fin: Date;

  @Column(DataType.DECIMAL(10, 2))
  montant_loyer: number;

  @Column(DataType.DECIMAL(10, 2))
  depot_garantie: number;

  @Column({ type: DataType.DECIMAL(5, 2), defaultValue: 10.00 })
  commission_agence: number;

  @Column({ type: DataType.STRING(20), defaultValue: 'Actif' })
  statut: string;

  @Column(DataType.TEXT)
  document_bail: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  date_creation: Date;

  @Column(DataType.DATE)
  date_mise_a_jour: Date;

  @BelongsTo(() => Bien)
  bien: Bien;

  @BelongsTo(() => Locataire)
  locataire: Locataire;

  @BelongsTo(() => Proprietaire)
  proprietaire: Proprietaire;

  @HasMany(() => Paiement)
  paiements: Paiement[];
}