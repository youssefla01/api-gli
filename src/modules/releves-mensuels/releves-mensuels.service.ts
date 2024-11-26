import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ReleveMensuel } from '../../models/releve-mensuel.model';
import { CreateReleveMensuelDto } from './dto/create-releve-mensuel.dto';
import { UpdateReleveMensuelDto } from './dto/update-releve-mensuel.dto';

@Injectable()
export class RelevesMensuelsService {
  constructor(
    @InjectModel(ReleveMensuel)
    private releveMensuelModel: typeof ReleveMensuel,
  ) {}

  async create(createReleveMensuelDto: CreateReleveMensuelDto): Promise<ReleveMensuel> {
    return this.releveMensuelModel.create({
      ...createReleveMensuelDto,
      date_creation: new Date(),
    });
  }

  async findAll(): Promise<ReleveMensuel[]> {
    return this.releveMensuelModel.findAll({
      include: ['proprietaire', 'administrateur'],
    });
  }

  async findOne(id: string): Promise<ReleveMensuel> {
    const releve = await this.releveMensuelModel.findByPk(id, {
      include: ['proprietaire', 'administrateur'],
    });

    if (!releve) {
      throw new NotFoundException(`Relevé avec l'ID ${id} non trouvé`);
    }

    return releve;
  }

  async update(id: string, updateReleveMensuelDto: UpdateReleveMensuelDto): Promise<ReleveMensuel> {
    const releve = await this.findOne(id);
    await releve.update(updateReleveMensuelDto);
    return releve;
  }

  async remove(id: string): Promise<void> {
    const releve = await this.findOne(id);
    await releve.destroy();
  }

  async findByProprietaire(proprietaireId: string): Promise<ReleveMensuel[]> {
    return this.releveMensuelModel.findAll({
      where: { proprietaire_id: proprietaireId },
      include: ['administrateur'],
    });
  }

  async findByPeriode(mois: number, annee: number): Promise<ReleveMensuel[]> {
    return this.releveMensuelModel.findAll({
      where: { mois, annee },
      include: ['proprietaire', 'administrateur'],
    });
  }
}