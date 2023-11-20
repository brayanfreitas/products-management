import { CustomerDto } from "../dtos";
import { CustomerEntity } from "../entities";

export interface ICustomerRepository {
    createCustomer: (customerData: CustomerDto) => Promise<CustomerEntity>,
    getCustomerById: (id: string) => Promise<CustomerEntity>,
    getCustomerByDocument: (document: string) => Promise<CustomerEntity>,
    getAllCustomers: () => Promise<CustomerEntity>
    deleteCustomer: ()=> Promise<null>

    
}