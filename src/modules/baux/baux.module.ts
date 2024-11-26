import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BauxService } from './baux.service';
import { BauxController } from './baux.controller';
import { Bail } from '../../models/bail.model';

@Module({
  imports: [SequelizeModule.forFeature([Bail])],
  controllers: [BauxController],
  providers: [BauxService],
  exports: [BauxService],
})
export class BauxModule {}