import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Proprietaire } from '../../models/proprietaire.model';
import { CreateProprietaireDto } from './dto/create-proprietaire.dto';
import { UpdateProprietaireDto } from './dto/update-proprietaire.dto';
import { Op } from 'sequelize';

@Injectable()
export class ProprietairesService {
  constructor(
    @InjectModel(Proprietaire)
    private proprietaireModel: typeof Proprietaire,
  ) {}

  async create(createProprietaireDto: CreateProprietaireDto): Promise<Proprietaire> {
    const sanitizedData = Object.fromEntries(
      Object.entries(createProprietaireDto).map(([key, value]) => [
        key,
        value === '' ? null : value
      ])
    );
    return this.proprietaireModel.create({
      ...sanitizedData,
      date_creation: new Date(),
    });
  }

  async findAll(search?: string): Promise<Proprietaire[]> {
    const whereClause = search
      ? {
          [Op.or]: [
            { nom: { [Op.iLike]: `%${search}%` } },
            { prenom: { [Op.iLike]: `%${search}%` } },
            { email: { [Op.iLike]: `%${search}%` } },
          ],
        }
      : undefined;
  
    // Ajout de l'option order pour trier par date de création
    return this.proprietaireModel.findAll({
      where: whereClause,
      order: [['createdAt', 'DESC']], // Trier par 'createdAt' (décroissant)
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

  async findByEmail(email: string): Promise<Proprietaire | null> {
    return this.proprietaireModel.findOne({
      where: { email },
    });
  }

  async findByPhone(phone: string): Promise<Proprietaire | null> {
    return this.proprietaireModel.findOne({
      where: { telephone: phone },
    });
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