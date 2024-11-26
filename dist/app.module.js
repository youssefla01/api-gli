"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const auth_module_1 = require("./auth/auth.module");
const proprietaires_module_1 = require("./modules/proprietaires/proprietaires.module");
const locataires_module_1 = require("./modules/locataires/locataires.module");
const biens_module_1 = require("./modules/biens/biens.module");
const baux_module_1 = require("./modules/baux/baux.module");
const paiements_module_1 = require("./modules/paiements/paiements.module");
const documents_biens_module_1 = require("./modules/documents-biens/documents-biens.module");
const releves_mensuels_module_1 = require("./modules/releves-mensuels/releves-mensuels.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const database_config_1 = require("./config/database.config");
const jwt_config_1 = require("./config/jwt.config");
const administrateur_model_1 = require("./models/administrateur.model");
const proprietaire_model_1 = require("./models/proprietaire.model");
const locataire_model_1 = require("./models/locataire.model");
const bien_model_1 = require("./models/bien.model");
const paiement_model_1 = require("./models/paiement.model");
const document_bien_model_1 = require("./models/document-bien.model");
const releve_mensuel_model_1 = require("./models/releve-mensuel.model");
const notification_model_1 = require("./models/notification.model");
const bail_model_1 = require("./models/bail.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [database_config_1.default, jwt_config_1.default],
            }),
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    ...configService.get('database'),
                    synchronize: true,
                    sync: {
                        force: true,
                        alter: true
                    },
                    logging: console.log,
                    models: [administrateur_model_1.Administrateur, proprietaire_model_1.Proprietaire, locataire_model_1.Locataire, bail_model_1.Bail, bien_model_1.Bien, paiement_model_1.Paiement, document_bien_model_1.DocumentBien, releve_mensuel_model_1.ReleveMensuel, notification_model_1.Notification],
                }),
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            proprietaires_module_1.ProprietairesModule,
            locataires_module_1.LocatairesModule,
            biens_module_1.BiensModule,
            baux_module_1.BauxModule,
            paiements_module_1.PaiementsModule,
            documents_biens_module_1.DocumentsBiensModule,
            releves_mensuels_module_1.RelevesMensuelsModule,
            notifications_module_1.NotificationsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map