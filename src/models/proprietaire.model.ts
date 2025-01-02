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

  @Column({
    type: DataType.STRING(100),

    allowNull: true,  
  })
  email: string | null;

  @Column({
    type: DataType.STRING(15),
    unique: true,
    allowNull: false, 
  })
  telephone: string;

  @Column({
    type: DataType.STRING(15),
    allowNull: true,  
  })
  numero_urgence: string | null;

  @Column({
    type: DataType.TEXT,
    allowNull: false,  // Ce champ est obligatoire
  })
  adresse: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,  // Autoriser null pour l'identifiant fiscal
  })
  identifiant_fiscal: string | null;

  @Column({
    type: DataType.STRING(34),
    allowNull: true,  // Autoriser null pour le RIB
  })
  rib: string | null;

  @Column({
    type: DataType.JSON,
    allowNull: true,  // Autoriser null pour la pièce jointe
  })
  piece_jointe: string | null;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  date_creation: Date;

  @Column({
    type: DataType.DATE,
  })
  date_mise_a_jour: Date;

  @HasMany(() => Bien)
  biens: Bien[];

  @HasMany(() => ReleveMensuel)
  releves: ReleveMensuel[];
}
