import { PrismaClient } from '@@/prisma/generated/client';

export const customerDatabase = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL
});
