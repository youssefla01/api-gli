import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LocatairesService } from './locataires.service';
import { LocatairesController } from './locataires.controller';
import { Locataire } from '../../models/locataire.model';

@Module({
  imports: [SequelizeModule.forFeature([Locataire])],
  controllers: [LocatairesController],
  providers: [LocatairesService],
  exports: [LocatairesService],
})
export class LocatairesModule {}