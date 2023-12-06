import { container } from 'tsyringe';
import { CustomerService } from '@/services/customer.service';
import { FastifyReply, FastifyRequest } from 'fastify';
import { CustomerDto, CustomerModel } from '@/domain';

const customerService = container.resolve<CustomerService>('CustomerService')

const createCustomer = async (req: FastifyRequest, reply: FastifyReply): Promise<CustomerModel> => {
  try {
    const data = req.body as CustomerDto;
    const customer: CustomerModel = await customerService.createCustomer(data);
    return reply.send(customer);
  } catch (error: any) {
    return reply.status(error.statusCode).send({ error });
  }
}

const getAllCustomers = async (req: FastifyRequest, reply: FastifyReply): Promise<CustomerModel[]> => {
  try {
    const customers: CustomerModel[] = await customerService.getAllCustomers();
    return reply.send(customers);
  } catch (error: any) {
    return reply.status(error.statusCode).send({ error });
  }
}

const getCustomerById = async (req: FastifyRequest, reply: FastifyReply): Promise<CustomerModel> => {
  try {
    const { id } = req.params as { id: string };
    const customer: CustomerModel = await customerService.getCustomerById(id);
    return reply.send(customer);
  } catch (error: any) {
    return reply.status(error.statusCode).send({ error });
  }
}

const deleteCustomer = async (req: FastifyRequest, reply: FastifyReply): Promise<void> => {
  try {
    const { id } = req.params as { id: string };
    console.log(id);
    await customerService.deleteCustomer(id);
  } catch (error: any) {
    return reply.status(error.statusCode).send({ message: 'error at deleting customer' });
  }
}

export { createCustomer, getAllCustomers, deleteCustomer, getCustomerById };
