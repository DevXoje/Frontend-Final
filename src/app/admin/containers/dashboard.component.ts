import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-dashboard',
	template: `
		<app-dashboard-layout>

			<app-table-users table1></app-table-users>
			<!--<app-gallery-orders table2></app-gallery-orders>-->
			<app-table-products table2></app-table-products>

		</app-dashboard-layout>
		<!--<app-table-products></app-table-products>
		<app-chart-products></app-chart-products>
		<app-table-users></app-table-users>-->
	`
})
export class DashboardComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {

	}

}
