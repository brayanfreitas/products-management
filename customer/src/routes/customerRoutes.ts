import { createCustomer } from '@/controllers/stationController';
import { FastifyInstance } from 'fastify/types/instance';

export async function customerFuelRoutes(fastify: FastifyInstance) {
  fastify.post(
    '/createCustomer',
    createCustomer
  );
}
