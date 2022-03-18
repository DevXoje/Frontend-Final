import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-store',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<app-layout-store>
		<app-store-head title="Dashboard" [hideBreadcrumbs]="false"></app-store-head>
		<app-store-carrousel></app-store-carrousel>
		<app-store-galery></app-store-galery>
		<app-store-calltoaction></app-store-calltoaction>
		<app-store-lists-collection></app-store-lists-collection>
		<!-- <app-dashboard-tables></app-dashboard-tables>
		<app-dashboard-cards></app-dashboard-cards>
		<app-dashboard-charts></app-dashboard-charts>
		<app-dashboard-tables></app-dashboard-tables> -->
	</app-layout-store>`
})
export class StoreComponent implements OnInit {
	data: any;
	constructor() {
		/* this.userService.user$.subscribe(user => {
			console.log('DashboardComponent user$', user);
		}); */
	}
	ngOnInit() { }
}
