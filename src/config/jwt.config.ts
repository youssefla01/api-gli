import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  accessSecret: process.env.JWT_ACCESS_SECRET || '123456',
  refreshSecret: process.env.JWT_REFRESH_SECRET || '123456',
  accessExpiresIn: '15m',
  refreshExpiresIn: '7d',
}));
