import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';
import { Icon, Link } from '@shared/navigation/domain/models';
import { sideNavItems, socialLinks, storeSideNavSections } from '@shared/navigation/infrastructure/data';
import { NavigationService } from '@shared/navigation/infrastructure/services';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-layout-store',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<span [ngClass]='{"sb-nav-fixed": !static}'>
		<app-top-nav-store ></app-top-nav-store>
		<div id="layoutSidenav">
			<app-side-nav-store [sidenavStyle]="sidenavStyle" class="d-lg-none">
			</app-side-nav-store>
			<div id="layoutSidenav_content">
				<main>
					<div class="container-fluid">
						<ng-content></ng-content>
					</div>
				</main>
				<app-footer></app-footer>
			</div>
		</div>
	</span>`
})
export class LayoutStoreComponent implements OnInit {
	@Input() static = false;
	@Input() light = false;
	@HostBinding('class.sb-sidenav-toggled') sideNavHidden = false;
	subscription: Subscription = new Subscription();

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
