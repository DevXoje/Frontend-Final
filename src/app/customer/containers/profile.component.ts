import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';


@Component({
	selector: 'app-customer-profile',
	template: `
	 <div>
		profile
	</div>`,
})
export class CustomerProfileComponent implements OnInit {

	constructor(
		private store: Store,
	) {
	}

	ngOnInit(): void {}

}
