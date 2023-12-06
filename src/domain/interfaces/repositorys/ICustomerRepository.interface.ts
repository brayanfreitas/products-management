import { CustomerDto } from '../../dtos';
import { CustomerModel } from '../../models';

export interface ICustomerRepository {
  createCustomer: (customerData: CustomerDto) => Promise<CustomerModel>,
  getAllCustomers: () => Promise<CustomerModel[]>
  deleteCustomer: (id: string) => Promise<void>
  getCustomerById: (id: string) => Promise<CustomerModel>,
  //   getCustomerByDocument: (document: string) => Promise<CustomerModel>,
}
