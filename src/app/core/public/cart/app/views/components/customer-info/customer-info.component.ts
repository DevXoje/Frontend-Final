import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetCustomerDetails } from '@public/cart/infrastructure/ngxs/cart.actions';
import { CartState } from '@public/cart/infrastructure/ngxs/cart.state';
import { Customer } from '@shared/tables/domain/models';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-customer-info',
	templateUrl: './customer-info.component.html',
	styleUrls: ['./customer-info.component.scss']
})

export class CustomerInfoComponent implements OnInit {
	@Select(CartState.userDetails) customer$!: Observable<Customer>;

	constructor(private store: Store) { }

	ngOnInit() {
		this.store.dispatch(GetCustomerDetails);
		this.store.select(CartState.userDetails);
	}
}