import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PaiementsService } from './paiements.service';
import { PaiementsController } from './paiements.controller';
import { Paiement } from '../../models/paiement.model';

@Module({
  imports: [SequelizeModule.forFeature([Paiement])],
  controllers: [PaiementsController],
  providers: [PaiementsService],
  exports: [PaiementsService],
})
export class PaiementsModule {}