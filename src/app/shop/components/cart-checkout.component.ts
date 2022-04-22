import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/auth/domain/auth.model';
import { AuthState } from 'src/app/auth/state/auth.state';
import { Order, OrderItem } from '../domain/shop.model';
import { OrderService } from '../services/shop.service';
import { SetLastOrder, SetSelectedOrder } from '../state/shop.actions';
import { OrderState } from '../state/shop.state';

@Component({
	selector: 'app-cart-checkout',
	template: `
		<app-table
			[datos]="orderItems$"
			(onEdit)="editHadler($event)"
			(onDelete)="deleteHadler($event)"
		></app-table>
	`,
})
export class CartCheckoutComponent implements OnInit {
	@Select(OrderState.getSelectedOrder)
	order$?: Observable<Order>;
	constructor(private store: Store, private orderService: OrderService) {}
	orderItems$: Observable<OrderItem[]> = new Observable<OrderItem[]>();
	ngOnInit(): void {
		this.order$?.subscribe((order) => {
			this.orderItems$ = this.orderService.getOrderItems(order);
		});
	}
	cartIcon = faShoppingCart;
	editHadler(id: number) {
		console.log('editHadler', id);
	}
	deleteHadler(id: number) {
		console.log('deleteHadler', id);
	}
}
