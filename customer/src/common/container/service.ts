import { CustomerService } from '@/services/customer.service';
import { container } from 'tsyringe';

container.register('CustomerService', { useClass: CustomerService })

export { container };
