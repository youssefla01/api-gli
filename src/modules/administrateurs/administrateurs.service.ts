import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Administrateur } from '../../models/administrateur.model';
import { CreateAdministrateurDto } from './dto/create-administrateur.dto';
import { UpdateAdministrateurDto } from './dto/update-administrateur.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AdministrateursService {
  constructor(
    @InjectModel(Administrateur)
    private administrateurModel: typeof Administrateur,
  ) {}

  async create(createAdministrateurDto: CreateAdministrateurDto): Promise<Administrateur> {
    const hashedPassword = await bcrypt.hash(createAdministrateurDto.mot_de_passe, 10);
    
    return this.administrateurModel.create({
      ...createAdministrateurDto,
      mot_de_passe: hashedPassword,
      role: 'Admin',
      date_creation: new Date(),
    });
  }

  async findAll(): Promise<Administrateur[]> {
    return this.administrateurModel.findAll({
      attributes: { exclude: ['mot_de_passe'] },
    });
  }

  async findOne(id: string): Promise<Administrateur> {
    const administrateur = await this.administrateurModel.findByPk(id, {
      attributes: { exclude: ['mot_de_passe'] },
    });

    if (!administrateur) {
      throw new NotFoundException(`Administrateur avec l'ID ${id} non trouvé`);
    }

    return administrateur;
  }

  async findOneWithPassword(id: string): Promise<Administrateur> {
    const administrateur = await this.administrateurModel.findByPk(id);

    if (!administrateur) {
      throw new NotFoundException(`Administrateur avec l'ID ${id} non trouvé`);
    }

    return administrateur;
  }

  async update(id: string, updateAdministrateurDto: UpdateAdministrateurDto): Promise<Administrateur> {
    const administrateur = await this.findOne(id);
    
    const updateData = { ...updateAdministrateurDto };
    if (updateData.mot_de_passe) {
      updateData.mot_de_passe = await bcrypt.hash(updateData.mot_de_passe, 10);
    }

    await administrateur.update({
      ...updateData,
      date_mise_a_jour: new Date(),
    });

    const { mot_de_passe, ...result } = administrateur.toJSON();
    return result as Administrateur;
  }

  async remove(id: string): Promise<void> {
    const administrateur = await this.findOne(id);
    await administrateur.destroy();
  }

  async findByEmail(email: string): Promise<Administrateur> {
    return this.administrateurModel.findOne({
      where: { email },
    });
  }

  async changePassword(id: string, currentPassword: string, newPassword: string): Promise<void> {
    const administrateur = await this.findOneWithPassword(id);

    const isPasswordValid = await bcrypt.compare(currentPassword, administrateur.mot_de_passe);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Mot de passe actuel incorrect');
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await administrateur.update({
      mot_de_passe: hashedNewPassword,
      date_mise_a_jour: new Date(),
    });
  }
}