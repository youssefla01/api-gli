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
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import { Administrateur } from './models/administrateur.model';
import { Proprietaire } from './models/proprietaire.model';
import { Locataire } from './models/locataire.model';
import { Bien } from './models/bien.model';
import { Paiement } from './models/paiement.model';
import { DocumentBien } from './models/document-bien.model';
import { ReleveMensuel } from './models/releve-mensuel.model';
import { Notification } from './models/notification.model';
import { Bail } from './models/bail.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, jwtConfig],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
        synchronize: true,
        sync: {
          force: true, 
          alter: true
        },  
        logging: console.log, 
        models: [Administrateur, Proprietaire, Locataire, Bail, Bien, Paiement, DocumentBien, ReleveMensuel, Notification],
      }),
      inject: [ConfigService],
    }),
    AuthModule,
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