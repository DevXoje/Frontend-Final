import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from './auth/domain/auth.model';
import { AuthService } from './auth/services/auth.service';
import { Login, Logout } from './auth/state/auth.actions';
import { AuthState } from './auth/state/auth.state';

@Component({
	selector: 'app-root',
	template: `
		<button (click)="logoutHandler()">Logout</button>
		<app-loader></app-loader>
		<router-outlet></router-outlet>
	`,
})
export class AppComponent implements OnInit {
	constructor(private store: Store, public authService: AuthService) {}

	ngOnInit() {
		const jwtToken = this.authService.printToken();
		// Replace this with real object
		console.log(jwtToken);

		/* if (jwtToken) {
      this.store.dispatch(new Login(userMokeado));
      this.authService.checkRole(jwtToken);
    } */
	}
	logoutHandler() {
		this.store.dispatch(new Logout(0));
	}
}
