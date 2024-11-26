import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Paiement } from '../../models/paiement.model';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';
import { Op } from 'sequelize';

@Injectable()
export class PaiementsService {
  constructor(
    @InjectModel(Paiement)
    private paiementModel: typeof Paiement,
  ) {}

  async create(createPaiementDto: CreatePaiementDto): Promise<Paiement> {
    return this.paiementModel.create({
      ...createPaiementDto,
      date_creation: new Date(),
    });
  }

  async findAll(): Promise<Paiement[]> {
    return this.paiementModel.findAll({
      include: ['bail'],
    });
  }

  async findOne(id: string): Promise<Paiement> {
    const paiement = await this.paiementModel.findByPk(id, {
      include: ['bail'],
    });

    if (!paiement) {
      throw new NotFoundException(`Paiement avec l'ID ${id} non trouvé`);
    }

    return paiement;
  }

  async update(id: string, updatePaiementDto: UpdatePaiementDto): Promise<Paiement> {
    const paiement = await this.findOne(id);

    await paiement.update({
      ...updatePaiementDto,
      date_mise_a_jour: new Date(),
    });

    return paiement;
  }

  async remove(id: string): Promise<void> {
    const paiement = await this.findOne(id);
    await paiement.destroy();
  }

  async findByBail(bailId: string): Promise<Paiement[]> {
    return this.paiementModel.findAll({
      where: { bail_id: bailId },
      include: ['bail'],
    });
  }

  async findByPeriode(debut: Date, fin: Date): Promise<Paiement[]> {
    return this.paiementModel.findAll({
      where: {
        date_paiement: {
          [Op.between]: [debut, fin],
        },
      },
      include: ['bail'],
    });
  }
}