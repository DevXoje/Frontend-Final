import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Auth} from 'src/app/auth/domain/auth.model';
import {AuthState} from 'src/app/auth/state';
import {SetLastOrder} from '../state';

@Component({
	selector: 'app-home',
	template: `
		canceler
	`,
})
export class CancelComponent implements OnInit {
	@Select(AuthState.getSelectedAuth)
	customer$?: Observable<Auth>;

	constructor(private store: Store) {
	}

	ngOnInit(): void {
		this.customer$?.subscribe((user) => {
			if (user.role == "customer") {
				this.store.dispatch(new SetLastOrder(user.id));
			}
		});
	}

}
