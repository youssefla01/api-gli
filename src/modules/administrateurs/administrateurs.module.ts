import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdministrateursService } from './administrateurs.service';
import { AdministrateursController } from './administrateurs.controller';
import { Administrateur } from '../../models/administrateur.model';

@Module({
  imports: [SequelizeModule.forFeature([Administrateur])],
  controllers: [AdministrateursController],
  providers: [AdministrateursService],
  exports: [AdministrateursService],
})
export class AdministrateursModule {}
