import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '@shared/auth/infrastructure/services';
import { SideNavItems, SideNavSection } from '@shared/navigation/domain/models';
import { NavigationService } from '@shared/navigation/infrastructure/services';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-side-nav',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<nav class="sb-sidenav accordion" id="sidenavAccordion" [ngClass]="sidenavStyle">
		<div class="sb-sidenav-menu">
			<div class="nav">
				<ng-container *ngFor="let section of sideNavSections"
					><div class="sb-sidenav-menu-heading" *ngIf="section.text">{{ section.text }}</div>
					<ng-container *ngFor="let item of section.items"><app-side-nav-item [sideNavItem]="sideNavItems[item]"></app-side-nav-item></ng-container
				></ng-container>
			</div>
		</div>
		<div class="sb-sidenav-footer">
			<div class="small">Logged in as:</div>
			<span *ngIf="userService.user$ | async as user">{{user.name}} {{user.id}}</span>
		</div>
	</nav>	`
})
export class SideNavComponent implements OnInit, OnDestroy {
	@Input() sidenavStyle!: string;
	@Input() sideNavItems!: SideNavItems;
	@Input() sideNavSections!: SideNavSection[];

	subscription: Subscription = new Subscription();
	routeDataSubscription!: Subscription;

	constructor(public navigationService: NavigationService, public userService: UserService) { }

	ngOnInit() { }

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}