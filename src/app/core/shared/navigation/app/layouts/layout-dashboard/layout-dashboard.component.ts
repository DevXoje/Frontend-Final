import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	HostBinding,
	Input,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { sideNavItems, sideNavSections } from '../../../infrastructure/data';
import { NavigationService } from '../../../infrastructure/services';

@Component({
	selector: 'app-layout-dashboard',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<span [ngClass]='{"sb-nav-fixed": !static}'>
		<app-top-nav></app-top-nav>
		<div id="layoutSidenav">
			<div id="layoutSidenav_nav">
				<app-side-nav
					[sidenavStyle]="sidenavStyle"
					[sideNavItems]="sideNavItems"
					[sideNavSections]="sideNavSections"></app-side-nav>
			</div>
			<div id="layoutSidenav_content">
				<main>
					<div class="container-fluid"><ng-content></ng-content></div>
				</main>
				<app-footer></app-footer>
			</div>
		</div>
	</span>
`
})
export class LayoutDashboardComponent implements OnInit, OnDestroy {
	@Input() static = false;
	@Input() light = false;
	@HostBinding('class.sb-sidenav-toggled') sideNavHidden = false;
	subscription: Subscription = new Subscription();
	sideNavItems = sideNavItems;
	sideNavSections = sideNavSections;
	sidenavStyle = 'sb-sidenav-dark';

	constructor(
		public navigationService: NavigationService,
		private changeDetectorRef: ChangeDetectorRef
	) { }
	ngOnInit() {
		if (this.light) {
			this.sidenavStyle = 'sb-sidenav-light';
		}
		this.subscription.add(
			this.navigationService.sideNavVisible$().subscribe(isVisible => {
				this.sideNavHidden = !isVisible;
				this.changeDetectorRef.markForCheck();
			})
		);
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
