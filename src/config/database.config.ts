import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  const dbConfig = {
    dialect: 'mysql',
    host: process.env.DB_HOST || 'gli-yousseflachguer25-f5c2.k.aivencloud.com',
    port: parseInt(process.env.DB_PORT, 10) || 26843,
    username: process.env.DB_USERNAME || 'avnadmin',
    password: process.env.DB_PASSWORD || 'AVNS_jr6bYs4zGNpdSFCNvnJ',
    database: process.env.DB_NAME || 'defaultdb',
    dialectOptions: {
      ssl: {
        require: true,  // Utiliser SSL si nécessaire
        rejectUnauthorized: false,  // Important si tu utilises SSL
      },
    },
    // autoLoadModels: true,
    // synchronize: true,
    // sync: {
    //   force: true,
    //   alter: true,
    // },
    logging: console.log,  // Affiche les requêtes SQL dans la console
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };

  // Affiche la configuration de la base de données dans la console
  console.log('Database Configuration:', dbConfig);

  return dbConfig;
});
