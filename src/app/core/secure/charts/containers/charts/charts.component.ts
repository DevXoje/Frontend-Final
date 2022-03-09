import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-charts',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<app-layout-dashboard>
		<app-dashboard-head title="Charts" [hideBreadcrumbs]="false"></app-dashboard-head>
		<app-card>
			<div class="card-body">Chart.js is a third party plugin that is used to generate the charts in this template.
				The charts below have been customized - for further customization options, please visit the official <a
					target="_blank" href="https://www.chartjs.org/docs/latest/">Chart.js documentation</a>.</div>
		</app-card>
		<app-card>
			<div class="card-header">
				<fa-icon class="mr-1" [icon]='["fas", "chart-area"]'></fa-icon>Area Chart Example
			</div>
			<div class="card-body">
				<app-charts-area></app-charts-area>
			</div>
			<div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
		</app-card>
		<div class="row">
			<div class="col-lg-6">
				<app-card>
					<div class="card-header">
						<fa-icon class="mr-1" [icon]='["fas", "chart-bar"]'></fa-icon>Bar Chart Example
					</div>
					<div class="card-body">
						<app-charts-bar></app-charts-bar>
					</div>
					<div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
				</app-card>
			</div>
			<div class="col-lg-6">
				<app-card>
					<div class="card-header">
						<fa-icon class="mr-1" [icon]='["fas", "chart-pie"]'></fa-icon>Pie Chart Example
					</div>
					<div class="card-body">
						<app-charts-pie></app-charts-pie>
					</div>
					<div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
				</app-card>
			</div>
		</div>
	</app-layout-dashboard>`
})
export class ChartsComponent implements OnInit {
	constructor() { }
	ngOnInit() { }
}
