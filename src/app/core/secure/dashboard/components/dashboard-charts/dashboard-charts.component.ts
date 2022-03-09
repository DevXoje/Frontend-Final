import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard-charts',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<div class="row">
		<div class="col-xl-6">
			<app-card>
				<div class="card-header"><fa-icon class="mr-1" [icon]='["fas", "chart-area"]'></fa-icon>Area Chart Example</div>
				<div class="card-body"><app-charts-area></app-charts-area></div
			></app-card>
		</div>
		<div class="col-xl-6">
			<app-card>
				<div class="card-header"><fa-icon class="mr-1" [icon]='["fas", "chart-bar"]'></fa-icon>Bar Chart Example</div>
				<div class="card-body"><app-charts-bar></app-charts-bar></div
			></app-card>
		</div>
	</div>`
})
export class DashboardChartsComponent implements OnInit {
	constructor() { }
	ngOnInit() { }
}
