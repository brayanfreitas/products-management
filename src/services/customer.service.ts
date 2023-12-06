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
      throw new Error('Verifique os dados, o cliente já pode estar cadastrado.');
    }
  }

  public async getAllCustomers(): Promise<CustomerModel[]> {
    try {
      const customers = await this.customerRepository.getAllCustomers();
      return customers;
    } catch (error: any) {
      throw new Error('Não foi possível listar os clientes.');
    }
  }

  public async getCustomerById(id: string): Promise<CustomerModel> {
    try {
      const customer = await this.customerRepository.getCustomerById(id);
      return customer;
    } catch (error: any) {
      throw new Error('Não foi possível encontrar o cliente.');
    }
  }

  public async deleteCustomer(id: string): Promise<void> {
    try {
      await this.customerRepository.deleteCustomer(id);
    } catch (error: any) {
      throw new Error('Não foi possível deletar o cliente.');
    }
  }
}
