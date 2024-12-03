"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('database', () => ({
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'gli_dev',
    logging: console.log,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}));
//# sourceMappingURL=database.config.js.map