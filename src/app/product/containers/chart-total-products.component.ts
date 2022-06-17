import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {ApexChart} from "ng-apexcharts";


@Component({
	selector: 'app-chart-total-products',
	template: `
		<app-chart-products [chartModel]="chart"></app-chart-products>
	`
})
export class ChartTotalProductsComponent implements OnInit {//, TableCustom: edit,delete

	chart: ApexChart = {
		width: 380,
		type: "pie"
	}

	constructor(private store: Store) {

	}

	ngOnInit(): void {

	}


}
