import { CustomerDto, CustomerModel, ICustomerRepository } from '@/domain';
import { injectable } from 'tsyringe';
import { customerDatabase } from '../prisma-client';

@injectable()
export class CustomerPrismaRepository implements ICustomerRepository {
  async createCustomer (customerData: CustomerDto): Promise<CustomerModel> {
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

  // async getCustomerById (customerId: string): Promise<CustomerModel> {};
  // async getCustomerByDocument (customerId: string): Promise<CustomerModel> {};
  // async getAllCustomers (): Promise<CustomerModel[]> {};
  // async updateCustomer (customerData: CustomerDto): Promise<CustomerModel> {};
  // async deleteCustomer (): Promise<null> {};
}
