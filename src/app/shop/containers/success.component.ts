import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {OrderState} from "../state";
import {Order} from "../domain/shop.model";

@Component({
	selector: 'app-home',
	template: `
		Succese!
	`,
})
export class SuccessComponent implements OnInit {
	@Select(OrderState.getSelectedOrder)
	order?: Observable<Order>;

	constructor(private store: Store) {
	}

	ngOnInit(): void {
		this.order?.subscribe((order) => {
			//this.store.dispatch(new ConfirmCompleteOrder());
		});
	}

}
