import { HttpResponse } from "src/app/app-common/services/HttpGenericAdapter";

export type Order = {
	id?: number;
	customer_id: number;
	amount?: number;
	order_items?: OrderItem[];
};
export type OrderItem = {
	id?: number;
	order_id?: number;
	product_id: number;
	quantity: number;
	amount?: number;
};
export type OrderStateModel = {
	orders: Order[];
	selectedOrder: Order;
};
export type OrderServiceInterface = {
	getAll(): Promise<Order[]>;
	getById(id: number): Promise<Order>;
	create(order: Partial<Order>): Promise<HttpResponse<Order>>;
	update(order: Partial<Order>): Promise<HttpResponse<Order>>;
	addOrderItem(order: Order, orderItem: OrderItem): Promise<Order>;
	getOrderItems(order: Order): Promise<OrderItem[]>;
};
