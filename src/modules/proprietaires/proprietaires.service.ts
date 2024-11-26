import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Proprietaire } from '../../models/proprietaire.model';
import { CreateProprietaireDto } from './dto/create-proprietaire.dto';
import { UpdateProprietaireDto } from './dto/update-proprietaire.dto';

@Injectable()
export class ProprietairesService {
  constructor(
    @InjectModel(Proprietaire)
    private proprietaireModel: typeof Proprietaire,
  ) {}

  async create(createProprietaireDto: CreateProprietaireDto): Promise<Proprietaire> {
    return this.proprietaireModel.create({
      ...createProprietaireDto,
      date_creation: new Date(),
    });
  }

  async findAll(): Promise<Proprietaire[]> {
    return this.proprietaireModel.findAll({
      include: ['biens', 'releves'],
    });
  }

  async findOne(id: string): Promise<Proprietaire> {
    const proprietaire = await this.proprietaireModel.findByPk(id, {
      include: ['biens', 'releves'],
    });

    if (!proprietaire) {
      throw new NotFoundException(`Propriétaire avec l'ID ${id} non trouvé`);
    }

    return proprietaire;
  }

  async update(id: string, updateProprietaireDto: UpdateProprietaireDto): Promise<Proprietaire> {
    const proprietaire = await this.findOne(id);
    
    await proprietaire.update({
      ...updateProprietaireDto,
      date_mise_a_jour: new Date(),
    });

    return proprietaire;
  }

  async remove(id: string): Promise<void> {
    const proprietaire = await this.findOne(id);
    await proprietaire.destroy();
  }
}