import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {HttpResponse} from 'src/app/app-common/services/HttpGenericAdapter';
import {CustomerService} from 'src/app/customer/services/customer.service';
import {environment} from 'src/environments/environment';
import {Order, OrderItem, OrderServiceInterface} from '../domain/shop.model';
import {HttpShopAdapter} from './HttpShopAdapter';

@Injectable({providedIn: 'root'})
export class OrderService {
	private readonly orderUrl: string;
	private orderService: OrderServiceInterface;

	constructor(
		private http: HttpClient,
		private customerService: CustomerService
	) {
		this.orderUrl = environment.baseUrl + '/admin/orders';
		this.orderService = new HttpShopAdapter(this.http, this.orderUrl);
	}

	getAll(): Observable<HttpResponse<Order[]>> {
		return from(this.orderService.getAll());
	}

	getById(id: number): Observable<HttpResponse<Order>> {
		return from(this.orderService.getById(id));
	}

	getLastByUser(customer_id: number): Observable<HttpResponse<Order>> {
		return this.customerService.getLastOrder(customer_id);
	}


	getAllOrders(customer_id: number): Observable<HttpResponse<Order[]>> {
		return this.customerService.getAllOrders(customer_id);
	}


	/*getByUser(customer_id: number): Observable<HttpResponse<Order[]>> {
		return this.customerService.getOrders(customer_id);
	}*/

	addOrderItem(order: Order, orderItem: OrderItem): Observable<Order> {
		return from(this.orderService.addOrderItem(order, orderItem));
	}

	update(order: Partial<Order>): Observable<HttpResponse<Order>> {
		return from(this.orderService.update(order));
	}

	create(order: Partial<Order>): Observable<HttpResponse<Order>> {
		return from(this.orderService.create(order));
	}

	getOrderItems(order: Order): Observable<OrderItem[]> {
		return from(this.orderService.getOrderItems(order));
	}

	completeOrder(order: Order): Observable<Order> {
		return from(this.orderService.completeOrder(order));
	}

	completeStripeOrder(): Observable<HttpResponse<Order>> {
		return from(this.orderService.completeStripeOrder());
	}

	createPaymentIntent(): any {
		return from(this.orderService.createPaymentIntent());
	}

	confirmOrder(id: number): Observable<HttpResponse<Order>> {
		return from(this.orderService.confirmOrder(id));
	}
}
