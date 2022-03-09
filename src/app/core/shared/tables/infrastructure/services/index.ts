import { CustomerService } from './customer.service';
import { TablesService } from './tables.service';

export const services = [TablesService, CustomerService];

export * from './tables.service';
export * from './customer.service';
