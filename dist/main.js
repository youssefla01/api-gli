"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:5173',
        credentials: true,
    });
    const logger = new common_1.Logger('Bootstrap');
    logger.log('Démarrage de l\'application...');
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(cookieParser());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API')
        .setDescription('API Pour gestion location immobilier')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    logger.log('Application démarrée sur le port 3000');
}
bootstrap();
//# sourceMappingURL=main.js.map