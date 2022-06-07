import {Component} from '@angular/core';
import {faShoppingCart, faUser, faUserSlash,} from '@fortawesome/free-solid-svg-icons';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {AuthState} from 'src/app/auth/state/auth.state';
import {Order} from '../domain/shop.model';
import {CompleteOrder, OrderState} from '../state';
import {Logout} from "../../auth/state";
import {Router} from "@angular/router";
import {NotificationService} from "../../app-common/services/notification.service";
import {Customer} from "../../customer/domain/customer.model";

@Component({
	selector: 'app-cart-nav',
	template: `
		<nav class="navbar navbar-light bg-light">
			<span class="navbar-brand mb-0 h1">{{shopName}}</span>
			<div class="navbar-nav">
				<form class="form-inline">
					<button class="btn btn-outline-success" type="button">Shop</button>
					<ng-container *ngIf="customer$ | async as customer">

						<ng-container *ngIf="!customer.id; else logged">
							<button [routerLink]="'/auth/login'">
								Login
								<fa-icon [icon]="authIcon"></fa-icon>
							</button>
						</ng-container>
						<ng-template #logged>
							<ng-container *ngIf="!customer.official_doc; else complete">
								<button [routerLink]="['/customer/complete/',customer.id]">
									Complete Account to Checkout
									<fa-icon [icon]="authIcon"></fa-icon>
								</button>
							</ng-container>
							<ng-template #complete>
								<button class="btn btn-sm btn-secondary" type="button"
										[routerLink]="'/customer/profile'">
									<fa-icon [icon]="authIcon"></fa-icon>
									Profile
								</button>

								<div class="lastOrderData">
									<button class="btn btn-sm btn-outline-primary" type="button"
											(click)="completeOrderHandler()">
										<fa-icon [icon]="cartIcon"></fa-icon>
										Complete Order
									</button>

									<p>user:{{ customer.email }}</p>
									<p>order:{{ (order$ | async)?.amount }}</p>
								</div>
							</ng-template>
							<button class="btn btn-sm btn-outline-secondary" type="button"
									(click)="logoutHandler()">
								<fa-icon [icon]="unauthIcon"></fa-icon>
								Logout
							</button>

						</ng-template>
					</ng-container>
				</form>
			</div>
		</nav>

		<a class="btn btn-sm btn-secondary" type="button"
		   [routerLink]="['/shop/customer/profile']">
			<fa-icon [icon]="authIcon"></fa-icon>
			Profile TEST
		</a>
	`,
})
export class CartNavComponent {
	@Select(AuthState.getSelectedAuth)
	customer$: Observable<Customer> | undefined;
	@Select(OrderState.getSelectedOrder)
	order$?: Observable<Order>;
	shopName = 'Shop';
	cartIcon = faShoppingCart;
	authIcon = faUser;
	unauthIcon = faUserSlash;

	constructor(private store: Store, private router: Router, private notificationService: NotificationService) {
	}

	async completeOrderHandler() {
		this.store.dispatch(new CompleteOrder()).subscribe({
				next: (state) => {
					this.notificationService.showSuccess('Order completed', 'Order completed');
					window.location.href = state.cart.selectedOrder.url;
				},
				error: (err) => {
					this.notificationService.showSuccess(err.message, 'Order NOT completed');
				}
			}
		)

	};

	logoutHandler() {
		this.store.dispatch(new Logout(0)).subscribe({
			next: (state) =>
				this.router.navigateByUrl('/login').then(() =>
					this.notificationService.showSuccess('Logout successful', 'Logout')
				)
			,
			error: (err) => {
				this.notificationService.showSuccess(err.message, 'Logout NOT completed');
			}
		});
	}
}
