import { inject, injectable } from 'tsyringe';
import { CustomerDto, CustomerModel, ICustomerRepository } from '@/domain';

@injectable()
export class CustomerService {
  constructor(
    @inject('CustomerRepository')
    private readonly customerRepository: ICustomerRepository
  ) { }

  public async createCustomer(data: CustomerDto): Promise<CustomerModel> {
    try {
      const customer = await this.customerRepository.createCustomer(data);
      return customer;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
