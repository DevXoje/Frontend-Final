import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Auth} from 'src/app/auth/domain/auth.model';
import {AuthState} from 'src/app/auth/state';

@Component({
	selector: 'app-profile-nav',
	template: `
		users zxvg
		sagasgasg
	`
})
export class ProfileNavComponent implements OnInit {
	@Select(AuthState.getAuthList) customers$?: Observable<Auth[]>;

	constructor(private store: Store) {
	}

	ngOnInit(): void {
		//this.store.dispatch(GetAllUsers);
		//this.store.select(AuthState.getAuthList);
	}


}
