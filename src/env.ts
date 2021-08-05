import 'dotenv/config';
import { join } from 'path';

function getOsEnvArray(key: string, delimiter = ','): string[] {
  return (process.env[key] && process.env[key].split(delimiter)) || [];
}

function getOsEnv(key: string): string {
  if (typeof process.env[key] === 'undefined') {
    throw new Error(`Environment variable ${key} is not set.`);
  }

  return process.env[key] as string;
}

function getOsEnvOptional(key: string): string | undefined {
  return process.env[key];
}

function getPath(path: string): string {
  return process.env.NODE_ENV === 'production'
    ? join(process.cwd(), path.replace('src/', 'dist/').slice(0, -3) + '.js')
    : join(process.cwd(), path);
}

function getPaths(paths: string[]): string[] {
  return paths.map((p) => getPath(p));
}

function getOsPath(key: string): string {
  return getPath(getOsEnv(key));
}

function getOsPaths(key: string): string[] {
  return getPaths(getOsEnvArray(key));
}

function toNumber(value: string): number {
  return parseInt(value, 10);
}

function toBool(value: string): boolean {
  return value === 'true';
}

function normalizePort(port: string): number | string {
  const parsedPort = parseInt(port, 10);
  if (isNaN(parsedPort)) {
    return port;
  }
  if (parsedPort >= 0) {
    return parsedPort;
  }
  return 0;
}

export const env = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  app: {
    port: normalizePort(process.env.PORT || getOsEnv('APP_PORT')) || 3000,
  },
  db: {
    type: getOsEnv('TYPEORM_CONNECTION'),
    host: getOsEnvOptional('TYPEORM_HOST'),
    port: toNumber(getOsEnvOptional('TYPEORM_PORT')),
    username: getOsEnvOptional('TYPEORM_USERNAME'),
    password: getOsEnvOptional('TYPEORM_PASSWORD'),
    database: getOsEnv('TYPEORM_DATABASE'),
    synchronize: toBool(getOsEnvOptional('TYPEORM_SYNCHRONIZE')),
    logger: getOsEnvOptional('TYPEORM_LOGGER'),
    logging: getOsEnvArray('TYPEORM_LOGGING'),
  },
  security: {
    jwtSecret: getOsEnvOptional('JWT_SECRET') || 'staart',
    accessTokenExpiry: getOsEnvOptional('ACCESS_TOKEN_EXPIRY') || '1d',
    refreshTokenExpiry: getOsEnvOptional('REFRESH_TOKEN_EXPIRY') || '7d',
    saltRounds: toNumber(getOsEnvOptional('SALT_ROUNDS')) || 10,
  },
  s3: {
    accessKeyId: getOsEnvOptional('S3_ACCESS_KEY_ID'),
    secretAccessKey: getOsEnvOptional('S3_ACCESS_KEY'),
    region: getOsEnvOptional('S3_REGION'),
    bucket: getOsEnvOptional('S3_BUCKET'),
  },
};

export default env;
