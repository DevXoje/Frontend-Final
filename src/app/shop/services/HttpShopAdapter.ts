import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from '@angular/common/http';
import {
	HttpResponse,
	HttpGenericAdapter,
} from 'src/app/app-common/services/HttpGenericAdapter';
import { Order, OrderItem, OrderServiceInterface } from '../domain/shop.model';

export class HttpShopAdapter
	extends HttpGenericAdapter<Order>
	implements OrderServiceInterface
{
	constructor(http: HttpClient, authUrl: string) {
		super(http, authUrl);
	}
	async addOrderItem(order: Order, orderItem: OrderItem): Promise<Order> {
		console.log('- addOrderItem -');
		console.log('order', order);
		console.log('orderItemRaw', orderItem);

		const payload = await new Promise((resolve, reject) => {
			this.http
				.post<Order>(`${this.url}/${order.id}/items`, orderItem)
				.subscribe({
					next: (data) => resolve(data),
					error: (err: HttpErrorResponse) => reject(err),
				});
		});
		return payload as Order;
	}


}
