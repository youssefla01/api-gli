import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Bien } from './bien.model';
import { Administrateur } from './administrateur.model';

@Table({ tableName: 'documents_biens' })
export class DocumentBien extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Bien)
  @Column(DataType.UUID)
  bien_id: string;

  @Column(DataType.STRING(255))
  nom_document: string;

  @Column(DataType.TEXT)
  chemin_document: string;

  @Column(DataType.STRING(50))
  type_document: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  date_ajout: Date;

  @ForeignKey(() => Administrateur)
  @Column(DataType.UUID)
  ajout_par: string;

  @BelongsTo(() => Bien)
  bien: Bien;

  @BelongsTo(() => Administrateur)
  administrateur: Administrateur;
}