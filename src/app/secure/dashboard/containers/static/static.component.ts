import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-static',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<app-layout-dashboard [static]="true">
		<app-dashboard-head title="Dashboard Static" [hideBreadcrumbs]="false"></app-dashboard-head>
		<app-dashboard-cards></app-dashboard-cards>
		<app-dashboard-charts></app-dashboard-charts>
		<app-dashboard-tables></app-dashboard-tables>
		<app-card>
			<div class="card-header">
				<fa-icon class="mr-1" [icon]='["fas", "chart-pie"]'></fa-icon>Pie Chart Example
			</div>
        	<div class="card-body">
				<app-charts-pie></app-charts-pie>
			</div>
        	<div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
		</app-card>
	</app-layout-dashboard>`
})
export class StaticComponent implements OnInit {
	constructor() {
		console.log('StaticComponent');

	}
	ngOnInit() { }
}
