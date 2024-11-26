import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  accessSecret: process.env.JWT_ACCESS_SECRET || 'accessSecret123',
  refreshSecret: process.env.JWT_REFRESH_SECRET || 'refreshSecret123',
  accessExpiresIn: '15m',
  refreshExpiresIn: '7d',
}));