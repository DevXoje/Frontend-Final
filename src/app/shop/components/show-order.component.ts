import {Component, Input, OnChanges, SimpleChanges,} from '@angular/core';
import {Store} from '@ngxs/store';
import {Order} from '../domain/shop.model';
import {OrderService} from '../services/order.service';

@Component({
	selector: 'app-show-order',
	template: `
		<div *ngIf="order" class="px-4 py-3">
			<h5 class="mb-0">Dejo esta compra sin completar</h5>
			<div class="p-4 rounded shadow-sm bg-light">
				<h5 *ngFor="let order_item of order.order_items"
				    class="font-italic mb-0">{{order_item.product}} * {{order_item.quantity}}
					=> {{order_item.quantity|currency}}</h5>
				<h4>Total =>{{ order.amount |currency}}</h4>
				<div class="controls">
					<button [routerLink]="['/shop']" class="btn btn-primary">
						Continue
					</button>
					<button [routerLink]="['/shop/checkout']" class="btn btn-success">
						Complete
					</button>
					<button (click)="deleteHadler($event)" class="btn btn-danger">
						Cancel
					</button>
				</div>
			</div>
		</div>

	`,
})
export class ShowOrderComponent implements OnChanges {
	@Input() order?: Order;

	constructor(private store: Store, private orderService: OrderService) {
	}

	ngOnChanges(changes: SimpleChanges): void {

	}

	editHadler(id: number) {
		console.log('editHadler', id);
	}

	deleteHadler(id: any) {
		console.log('deleteHadler', id);
	}

}
