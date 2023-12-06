import 'dotenv/config';

export const createDatabaseUrl = (dbName: string): string => {
  return `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${dbName}${process.env.DB_SSLMODE}`;
};
