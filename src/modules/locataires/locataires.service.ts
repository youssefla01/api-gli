import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Locataire } from '../../models/locataire.model';
import { CreateLocataireDto } from './dto/create-locataire.dto';
import { UpdateLocataireDto } from './dto/update-locataire.dto';

@Injectable()
export class LocatairesService {
  findByPhone(telephone: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(Locataire)
    private locataireModel: typeof Locataire,
  ) {}

  async create(createLocataireDto: CreateLocataireDto): Promise<Locataire> {
    const sanitizedData = Object.fromEntries(
      Object.entries(createLocataireDto).map(([key, value]) => [
        key,
        value === '' ? null : value
      ])
    );
    return this.locataireModel.create({
      ...sanitizedData,
      date_creation: new Date(),
    });
  }

  async findAll(): Promise<Locataire[]> {
    return this.locataireModel.findAll({
      include: ['baux'],
    });
  }

  async findOne(id: string): Promise<Locataire> {
    const locataire = await this.locataireModel.findByPk(id, {
      include: ['baux'],
    });

    if (!locataire) {
      throw new NotFoundException(`Locataire avec l'ID ${id} non trouvé`);
    }

    return locataire;
  }

  async update(id: string, updateLocataireDto: UpdateLocataireDto): Promise<Locataire> {
    const locataire = await this.findOne(id);
    
    await locataire.update({
      ...updateLocataireDto,
      date_mise_a_jour: new Date(),
    });

    return locataire;
  }
  
  async updateStatus(id: string, statut: string): Promise<Locataire> {
    const locataire = await this.findOne(id);

    if (!locataire) {
      throw new NotFoundException(`Locataire avec l'ID ${id} non trouvé`);
    }

    await locataire.update({
      statut,
      date_mise_a_jour: new Date(),
    });

    return locataire;
  }

  async remove(id: string): Promise<void> {
    const locataire = await this.findOne(id);
    await locataire.destroy();
  }
}