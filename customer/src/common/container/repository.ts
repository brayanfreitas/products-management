import { container } from 'tsyringe';
import { CustomerPrismaRepository } from '@/infra';

container.register('CustomerRepository', { useClass: CustomerPrismaRepository });

export { container };
