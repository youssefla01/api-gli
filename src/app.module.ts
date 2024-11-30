import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { ProprietairesModule } from './modules/proprietaires/proprietaires.module';
import { LocatairesModule } from './modules/locataires/locataires.module';
import { BiensModule } from './modules/biens/biens.module';
import { BauxModule } from './modules/baux/baux.module';
import { PaiementsModule } from './modules/paiements/paiements.module';
import { DocumentsBiensModule } from './modules/documents-biens/documents-biens.module';
import { RelevesMensuelsModule } from './modules/releves-mensuels/releves-mensuels.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AdministrateursModule } from './modules/administrateurs/administrateurs.module';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, jwtConfig],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        models: [__dirname + '/models'],
        autoLoadModels: true,
        synchronize: true,
        sync: {
          force: true,
          alter: true
        },
        logging: console.log
      }),
    }),
    AuthModule,
    AdministrateursModule,
    ProprietairesModule,
    LocatairesModule,
    BiensModule,
    BauxModule,
    PaiementsModule,
    DocumentsBiensModule,
    RelevesMensuelsModule,
    NotificationsModule,
  ],
})
export class AppModule {}