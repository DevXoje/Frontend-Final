import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '@shared/auth/infrastructure/services';
import { Icon, Link, SideNavItems, SideNavSection } from '@shared/navigation/domain/models';
import { NavigationService } from '@shared/navigation/infrastructure/services';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-side-nav-store',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<nav class="sb-sidenav accordion" id="sidenavAccordion" [ngClass]="sidenavStyle">
		<div class="sb-sidenav-menu">
			<div class="nav">
				<img src="https://via.placeholder.com/200x90.png?text=JODERRR" alt="imgBrand">
				<app-top-nav-cart-info></app-top-nav-cart-info>
				<app-top-nav-user></app-top-nav-user>
				<app-list-links></app-list-links>
			</div>
			<app-social-links></app-social-links>
			<app-mail-info></app-mail-info>
		</div>
	</nav>	`
})
export class SideNavStoreComponent implements OnInit, OnDestroy {
	@Input() sidenavStyle!: string;

	subscription: Subscription = new Subscription();
	routeDataSubscription!: Subscription;


	constructor(public navigationService: NavigationService, public userService: UserService) { }

	ngOnInit() { }

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
