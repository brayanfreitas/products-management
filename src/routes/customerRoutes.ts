import { createCustomer, deleteCustomer, getAllCustomers, getCustomerById } from '@/controllers/customerController';
import { FastifyInstance } from 'fastify/types/instance';

export async function customerFuelRoutes(fastify: FastifyInstance) {
  fastify.post(
    '/createCustomer',
    createCustomer
  );

  fastify.get(
    '/getAllCustomers',
    getAllCustomers
  );

  fastify.get(
    '/getCustomerById/:id',
    getCustomerById
  );

  fastify.delete(
    '/:id',
    deleteCustomer
  );
}
