import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RelevesMensuelsService } from './releves-mensuels.service';
import { RelevesMensuelsController } from './releves-mensuels.controller';
import { ReleveMensuel } from '../../models/releve-mensuel.model';

@Module({
  imports: [SequelizeModule.forFeature([ReleveMensuel])],
  controllers: [RelevesMensuelsController],
  providers: [RelevesMensuelsService],
  exports: [RelevesMensuelsService],
})
export class RelevesMensuelsModule {}