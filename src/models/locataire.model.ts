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

  @Column(DataType.DATE)
  date_naissance: Date;

  @Column(DataType.STRING(100))
  lieu_naissance: string;

  @Column(DataType.STRING(20))
  genre: string;

  @Column(DataType.STRING(50))
  situation_familiale: string;

  @Column(DataType.INTEGER)
  nombre_enfants: number;

  @Column(DataType.STRING(50))
  nationalite: string;

  @Column(DataType.STRING(15))
  telephone: string;

  @Column({ type: DataType.STRING(100), unique: true })
  email: string;

  @Column(DataType.TEXT)
  adresse_principale: string;

  @Column(DataType.STRING(20))
  contact_urgence: string; // Nom et numéro de contact urgence combiné

  @Column(DataType.STRING(20))
  cin: string; // Numéro de la pièce d'identité (CIN)

  @Column(DataType.TEXT)
  piece_identite: string; // Référence au fichier pièce d'identité

  @Column(DataType.TEXT)
  piece_jointe: string; // Autres documents attachés au locataire

  @Column(DataType.TEXT)
  commentaire: string; // Remarques ou notes sur le locataire

  @Column({ type: DataType.STRING(20), defaultValue: 'Actif' })
  statut: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  date_creation: Date;

  @Column(DataType.DATE)
  date_mise_a_jour: Date;

  @HasMany(() => Bail)
  baux: Bail[];
}
