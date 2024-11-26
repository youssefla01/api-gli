import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bail } from '../../models/bail.model';
import { CreateBailDto } from './dto/create-bail.dto';
import { UpdateBailDto } from './dto/update-bail.dto';

@Injectable()
export class BauxService {
  constructor(
    @InjectModel(Bail)
    private bailModel: typeof Bail,
  ) {}

  async create(createBailDto: CreateBailDto): Promise<Bail> {
    return this.bailModel.create({
      ...createBailDto,
      date_creation: new Date(),
    });
  }

  async findAll(): Promise<Bail[]> {
    return this.bailModel.findAll({
      include: ['bien', 'locataire', 'proprietaire', 'paiements'],
    });
  }

  async findOne(id: string): Promise<Bail> {
    const bail = await this.bailModel.findByPk(id, {
      include: ['bien', 'locataire', 'proprietaire', 'paiements'],
    });

    if (!bail) {
      throw new NotFoundException(`Bail avec l'ID ${id} non trouvé`);
    }

    return bail;
  }

  async update(id: string, updateBailDto: UpdateBailDto): Promise<Bail> {
    const bail = await this.findOne(id);
    
    await bail.update({
      ...updateBailDto,
      date_mise_a_jour: new Date(),
    });

    return bail;
  }

  async remove(id: string): Promise<void> {
    const bail = await this.findOne(id);
    await bail.destroy();
  }

  async findByProprietaire(proprietaireId: string): Promise<Bail[]> {
    return this.bailModel.findAll({
      where: { proprietaire_id: proprietaireId },
      include: ['bien', 'locataire', 'paiements'],
    });
  }

  async findByLocataire(locataireId: string): Promise<Bail[]> {
    return this.bailModel.findAll({
      where: { locataire_id: locataireId },
      include: ['bien', 'proprietaire', 'paiements'],
    });
  }

  async findByBien(bienId: string): Promise<Bail[]> {
    return this.bailModel.findAll({
      where: { bien_id: bienId },
      include: ['locataire', 'proprietaire', 'paiements'],
    });
  }
}