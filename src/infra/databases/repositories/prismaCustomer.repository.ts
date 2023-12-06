import { CustomerDto, CustomerModel, ICustomerRepository } from '@/domain';
import { injectable } from 'tsyringe';
import { customerDatabase } from '../prisma-client';

@injectable()
export class CustomerPrismaRepository implements ICustomerRepository {
  async createCustomer(customerData: CustomerDto): Promise<CustomerModel> {
    const customer = await customerDatabase.customer.create({
      data: {
        name: customerData.name,
        email: customerData.email,
        cellPhone: customerData.cellPhone,
        cpf: customerData.cpf,
        gender: customerData.gender,
        dateOfBirth: customerData.dateOfBirth,
        address: {
          create: {
            street: customerData.address.street,
            number: customerData.address.number,
            district: customerData.address.district,
            city: customerData.address.city,
            state: customerData.address.state,
            country: customerData.address.country,
            zipCode: customerData.address.zipCode
          }
        }
      }
    });
    return customer;
  }

  async getAllCustomers(): Promise<CustomerModel[]> {
    const customers = await customerDatabase.customer.findMany({
    });
    return customers;
  };

  async getCustomerById(customerId: string): Promise<CustomerModel> {
    const customer = await customerDatabase.customer.findUnique({
      where: {
        id: customerId
      }
    });
    if (!customer) throw new Error('Customer not found');
    return customer;
  }

  async deleteCustomer(id: string): Promise<void> {
    try {
      const customer = await this.getCustomerById(id);
      if (!customer) throw new Error('Customer not found');
      await customerDatabase.customer.delete({
        where: {
          id
        }
      });
    } catch (error: any) {
      throw new Error('Error at deleting customer');
    }
  };

  // async getCustomerById (customerId: string): Promise<CustomerModel> {};
  // async getCustomerByDocument (customerId: string): Promise<CustomerModel> {};
  // async updateCustomer (customerData: CustomerDto): Promise<CustomerModel> {};
  //
}
