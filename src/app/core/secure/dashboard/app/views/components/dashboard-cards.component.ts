import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard-cards',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<div class="row">
		<div class="col-xl-3 col-md-6">
			<app-card-view-details link="/dashboard" background="bg-primary"><div class="card-body">Primary Card</div></app-card-view-details>
		</div>
		<div class="col-xl-3 col-md-6">
			<app-card-view-details link="/dashboard" background="bg-warning"><div class="card-body">Warning Card</div></app-card-view-details>
		</div>
		<div class="col-xl-3 col-md-6">
			<app-card-view-details link="/dashboard" background="bg-success"><div class="card-body">Success Card</div></app-card-view-details>
		</div>
		<div class="col-xl-3 col-md-6">
			<app-card-view-details link="/dashboard" background="bg-danger"><div class="card-body">Danger Card</div></app-card-view-details>
		</div>
	</div>`
})
export class DashboardCardsComponent implements OnInit {
	constructor() { }
	ngOnInit() { }
}
