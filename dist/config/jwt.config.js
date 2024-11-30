"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('jwt', () => ({
    accessSecret: process.env.JWT_ACCESS_SECRET || '123456',
    refreshSecret: process.env.JWT_REFRESH_SECRET || '123456',
    accessExpiresIn: '15m',
    refreshExpiresIn: '7d',
}));
console.log('verifier token', process.env.JWT_ACCESS_SECRET);
//# sourceMappingURL=jwt.config.js.map