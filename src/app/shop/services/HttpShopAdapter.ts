import {HttpClient, HttpErrorResponse,} from '@angular/common/http';
import {HttpGenericAdapter, HttpResponse,} from 'src/app/app-common/services/HttpGenericAdapter';
import {environment} from 'src/environments/environment';
import {Order, OrderItem, OrderServiceInterface} from '../domain/shop.model';

export class HttpShopAdapter
	extends HttpGenericAdapter<Order>
	implements OrderServiceInterface {
	/* 	private authHttp: HttpProductAdapter = new HttpProductAdapter(
		this.http,
		environment.baseUrl + '/products'
	); */


	constructor(http: HttpClient, orderUrl: string) {
		super(http, orderUrl);
	}

	async completeStripeOrder(): Promise<HttpResponse<Order>> {
		const payload = await new Promise((resolve, reject) => {
			this.http
				.get<Order>(`http://127.0.0.1:8000/api/stripe/checkout`)
				.subscribe({
					next: (data) => resolve(data),
					error: (err: HttpErrorResponse) => reject(err),
				});
		});
		return payload as HttpResponse<Order>;
	}

	async addOrderItem(order: Order, orderItem: OrderItem): Promise<Order> {

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

	async completeOrder(order: Order): Promise<Order> {
		const payload = await new Promise((resolve, reject) => {
			this.http
				.post<Order>(
					`${environment.baseUrl}/create-checkout-session`,
					order
				)
				.subscribe({
					next: (data) => resolve(data),
					error: (err: HttpErrorResponse) => reject(err),
				});
		});
		return payload as Order;
	}

	async createPaymentIntent(): Promise<Order> {
		const orderItem = {};
		const payload = await new Promise((resolve, reject) => {
			this.http
				.post<Order>(`${this.url}/create/`, orderItem)
				.subscribe({
					next: (data) => resolve(data),
					error: (err: HttpErrorResponse) => reject(err),
				});
		});
		return payload as Order;
	}

	async confirmOrder(id: number): Promise<HttpResponse<Order>> {
		const payload = await new Promise((resolve, reject) => {
			this.http
				.get<Order>(`${this.url}/stripe/checkout`)
				.subscribe({
					next: (data) => resolve(data),
					error: (err: HttpErrorResponse) => reject(err),
				});
		});
		return payload as HttpResponse<Order>;
	}

	override async getAll(): Promise<HttpResponse<Order[]>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Order[]>(`${this.url}/all`).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as HttpResponse<Order[]>;
	}
}
