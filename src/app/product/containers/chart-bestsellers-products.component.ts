import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {ApexChart} from "ng-apexcharts";


@Component({
	selector: 'app-chart-bestsellers-products',
	template: `
		<app-chart-products [chartModel]="chart"></app-chart-products>
	`
})
export class ChartBestsellersProductsComponent implements OnInit {//, TableCustom: edit,delete

	chart: ApexChart = {
		width: 380,
		type: "treemap"
	}

	constructor(private store: Store) {

	}

	ngOnInit(): void {

	}


}
