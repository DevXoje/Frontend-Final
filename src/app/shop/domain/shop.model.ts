export type Order = {
	id: number;
	customer_id: string;
	amount: number;
	order_items: OrderItem[];
};
export type OrderItem = {
	id: number;
	order_id: number;
	product_id: number;
	quantity: number;
	amount: number;
};
export type OrderStateModel = {
	orders: Order[];
	selectedOrder: Order;
};
