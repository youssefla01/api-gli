import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',  
    credentials: true, 
  });

  // Par défaut, NestJS affiche des logs avec les méthodes suivantes :
  const logger = new Logger('Bootstrap');  // Personnalisation du logger
  logger.log('Démarrage de l\'application...');

  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API Pour gestion location immobilier')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  logger.log('Application démarrée sur le port 3000');
}

bootstrap();
