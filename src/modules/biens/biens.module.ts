import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BiensService } from './biens.service';
import { BiensController } from './biens.controller';
import { Bien } from '../../models/bien.model';

@Module({
  imports: [SequelizeModule.forFeature([Bien])],
  controllers: [BiensController],
  providers: [BiensService],
  exports: [BiensService],
})
export class BiensModule {}