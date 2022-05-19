import {HttpGenericService, HttpResponse,} from 'src/app/app-common/services/HttpGenericAdapter';
import {Auth} from 'src/app/auth/domain/auth.model';
import {Order} from 'src/app/shop/domain/shop.model';

export type Customer = Auth & {
	address?: string;
	name?: string;
	orders?: Order[];
	official_doc?: string;
};
export type CustomerServiceInterface = HttpGenericService<Customer> & {
	getLastOrder(customer_id: number): Promise<HttpResponse<Order>>;
	getOrders(customer_id: number): Promise<HttpResponse<Order[]>>;
	//getById(auth_id: number): Promise<HttpResponse<Customer>>;
	getProfile(): Promise<Customer>;
};
export type CustomerStateModel = {
	customers: Customer[];
	selectedCustomer: Customer;
};
