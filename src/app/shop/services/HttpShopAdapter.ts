import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from '@angular/common/http';
import {
	HttpResponse,
	HttpGenericAdapter,
} from 'src/app/app-common/services/HttpGenericAdapter';
import { HttpProductAdapter } from 'src/app/product/services/HttpProductAdapter';
import { environment } from 'src/environments/environment';
import { Order, OrderItem, OrderServiceInterface } from '../domain/shop.model';

export class HttpShopAdapter
	extends HttpGenericAdapter<Order>
	implements OrderServiceInterface
{
	private authHttp: HttpProductAdapter = new HttpProductAdapter(
		this.http,
		environment.baseUrl + '/products'
	);
	constructor(http: HttpClient, orderUrl: string) {
		super(http, orderUrl);
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
	async getOrderItems(order: Order): Promise<OrderItem[]> {
		const payload = await new Promise((resolve, reject) => {
			this.http
				.get<OrderItem[]>(`${this.url}/${order.id}/items`)
				.subscribe({
					next: (data) => resolve(data),
					error: (err: HttpErrorResponse) => reject(err),
				});
		});
		return payload as OrderItem[];
	}
}
