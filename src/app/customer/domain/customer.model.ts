import { Auth } from 'src/app/auth/domain/auth.model';
import { Order } from 'src/app/shop/domain/shop.model';

export type Customer = Auth & { address?: string; name?: string };
export type CustomerServiceInterface = {
	getLastOrder(customer_id: number): Promise<Order>;
	getById(auth_id: number): Promise<Customer>;
};
