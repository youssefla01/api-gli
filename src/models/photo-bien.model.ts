import { Column, Model, Table, DataType, ForeignKey } from 'sequelize-typescript';
import { Bien } from './bien.model';

@Table({ tableName: 'photos_bien' })
export class PhotoBien extends Model {
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
  url: string; // URL de la photo

  @Column(DataType.STRING(255))
  description: string; // Description de la photo
}
