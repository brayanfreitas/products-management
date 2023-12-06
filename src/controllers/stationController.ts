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
    return reply.status(error.statusCode).send({ error: error.message });
  }
}

export { createCustomer };
