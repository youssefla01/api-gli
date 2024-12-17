import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Proprietaire } from './proprietaire.model';
import { DocumentBien } from './document-bien.model';
import { Bail } from './bail.model';
import { PhotoBien } from './photo-bien.model';

@Table({ tableName: 'biens' })
export class Bien extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column(DataType.STRING(50))
  type: string;

  @Column(DataType.TEXT)
  adresse: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.DECIMAL(10, 2))
  surface: number;

  @Column(DataType.INTEGER)
  nb_pieces: number;

  @Column({ type: DataType.STRING(20), defaultValue: 'Libre' })
  etat: string;

  @ForeignKey(() => Proprietaire)
  @Column(DataType.UUID)
  proprietaire_id: string;

  @BelongsTo(() => Proprietaire)
  proprietaire: Proprietaire;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  date_creation: Date;

  @Column(DataType.DATE)
  date_mise_a_jour: Date;

  @HasMany(() => DocumentBien)
  documents: DocumentBien[];

  @HasMany(() => Bail)
  baux: Bail[];

  // Champs supplémentaires (organisés)
  @Column(DataType.DECIMAL(10, 2))
  prix: number; // Prix du bien

  @HasMany(() => PhotoBien)
  photos: PhotoBien[]; // Relation avec les photos

  @Column(DataType.STRING(50))
  ref_compteur_eau: string; // Référence du compteur d'eau

  @Column(DataType.STRING(50))
  ref_compteur_electricite: string; // Référence du compteur d'électricité
}
