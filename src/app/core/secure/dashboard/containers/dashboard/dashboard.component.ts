import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<app-layout-dashboard>
		<app-dashboard-head title="Dashboard" [hideBreadcrumbs]="false"></app-dashboard-head>
		<app-dashboard-tables></app-dashboard-tables>
		<!-- <app-dashboard-cards></app-dashboard-cards>
		<app-dashboard-charts></app-dashboard-charts>
		<app-dashboard-tables></app-dashboard-tables> -->
	</app-layout-dashboard>`
})
export class DashboardComponent implements OnInit {
	data: any;
	constructor() {
		
	}
	ngOnInit() { }
}
