import {Component} from '@angular/core';
import {faShoppingCart, faUser, faUserSlash,} from '@fortawesome/free-solid-svg-icons';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Auth} from 'src/app/auth/domain/auth.model';
import {AuthState} from 'src/app/auth/state/auth.state';
import {Order} from '../domain/shop.model';
import {OrderState} from '../state/shop.state';
import {Logout} from "../../auth/state/auth.actions";
import {Router} from "@angular/router";

@Component({
	selector: 'app-cart-nav',
	template: `
		<nav class="navbar navbar-light bg-light">
			<span class="navbar-brand mb-0 h1">{{shopName}}</span>
			<div class="navbar-nav">
				<form class="form-inline">
					<button class="btn btn-outline-success" type="button">Home</button>

					<!-- <div *ngIf="customer$|async as customer; else notLogged"> -->
					<ng-container *ngIf="customer$ | async as customer">
						<div *ngIf="customer.id; else notLogged">
							<button class="btn btn-sm btn-outline-secondary" type="button" (click)="logoutHandler()">
								<fa-icon [icon]="unauthIcon"></fa-icon>
								Logout
							</button>
							<fa-icon [icon]="cartIcon" [routerLink]="'/checkout'"></fa-icon>
							<p>user:{{ customer.email }}</p>
							<p>order:{{ (order$ | async)?.amount }}</p>
						</div>
						<ng-template #notLogged>
							<button [routerLink]="'/auth/login'">
								Login
								<fa-icon [icon]="authIcon"></fa-icon>
							</button>
						</ng-template>
					</ng-container>
				</form>
			</div>
		</nav>
	`,
})
export class CartNavComponent {
	@Select(AuthState.getSelectedAuth)
	customer$: Observable<Auth> | undefined;
	@Select(OrderState.getSelectedOrder)
	order$?: Observable<Order>;
	shopName = 'Shop';
	cartIcon = faShoppingCart;
	authIcon = faUser;
	unauthIcon = faUserSlash;

	constructor(private store: Store, private router: Router) {
	}

	logoutHandler() {
		this.store.dispatch(new Logout(0)).subscribe(() => {
			this.router.navigateByUrl('/login');
		});
	}

}
