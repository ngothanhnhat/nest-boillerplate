import { ConnectionOptions } from 'typeorm';
import env from '../env';

export const OrmConfig: ConnectionOptions = {
  type: env.db.type,
  host: env.db.host,
  port: env.db.port,
  username: env.db.username,
  password: env.db.password,
  database: env.db.database,
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
  synchronize: env.db.synchronize,
  logging: env.db.logging,
  logger: env.db.logger,
} as ConnectionOptions;
