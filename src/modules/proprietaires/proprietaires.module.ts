import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProprietairesService } from './proprietaires.service';
import { ProprietairesController } from './proprietaires.controller';
import { Proprietaire } from '../../models/proprietaire.model';

@Module({
  imports: [SequelizeModule.forFeature([Proprietaire])],
  controllers: [ProprietairesController],
  providers: [ProprietairesService],
  exports: [ProprietairesService],
})
export class ProprietairesModule {}