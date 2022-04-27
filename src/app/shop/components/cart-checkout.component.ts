import {
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
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
			[datos]="orderItemsToSend$"
			(onEdit)="editHadler($event)"
			(onDelete)="deleteHadler($event)"
		></app-table>
	`,
})
export class CartCheckoutComponent implements OnChanges {
	@Input() orderItems$?: OrderItem[];
	orderItemsToSend$?: Observable<OrderItem[]>;
	constructor(private store: Store, private orderService: OrderService) {}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChanges', changes);

		let orderItems;
		if (changes['orderItems$'].currentValue !== undefined) {
			orderItems = changes['orderItems$'];
			//if (this.orderItems$ instanceof Observable)
			console.log('orderItems', orderItems);

			this.orderItemsToSend$ = of(orderItems.currentValue);
		}
	}
	//orderItems$: Observable<OrderItem[]> = new Observable<OrderItem[]>();
	cartIcon = faShoppingCart;
	editHadler(id: number) {
		console.log('editHadler', id);
	}
	deleteHadler(id: number) {
		console.log('deleteHadler', id);
	}
}
