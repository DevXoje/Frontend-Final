import {HttpResponse} from 'src/app/app-common/services/HttpGenericAdapter';
import {Customer} from "../../customer/domain/customer.model";
import {Product} from "../../product/domain/product.model";

export type Order = {
	id?: number;
	customer_id?: number;
	customer: Customer;
	amount?: number;
	order_items?: OrderItem[];
	updated_at?: Date;
};
export type OrderItem = {
	id?: number;
	order_id?: number;
	product_id?: number;
	product?: Product;
	quantity: number;
	amount?: number;
};
export type OrderStateModel = {
	orders: Order[];
	selectedOrder: Order;
};
export type OrderServiceInterface = {
	getAll(): Promise<HttpResponse<Order[]>>;
	getById(id: number): Promise<HttpResponse<Order>>;
	create(order: Partial<Order>): Promise<HttpResponse<Order>>;
	update(order: Partial<Order>): Promise<HttpResponse<Order>>;
	addOrderItem(order: Order, orderItem: OrderItem): Promise<Order>;
	getOrderItems(order: Order): Promise<OrderItem[]>;
	completeOrder(order: Order): Promise<Order>;
};
