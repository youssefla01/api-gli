import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Bien } from './bien.model';

@Table({ tableName: 'photos' })
export class Photo extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column(DataType.STRING)
  filename: string;

  @Column(DataType.STRING)
  path: string;

  @ForeignKey(() => Bien)
  @Column(DataType.UUID)
  bienId: string;

  @BelongsTo(() => Bien)
  bien: Bien;
} 