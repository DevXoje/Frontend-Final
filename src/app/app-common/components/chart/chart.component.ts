import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartComponent as ChartApexComponent} from 'ng-apexcharts';
import {ChartOptions} from '../../domain/chartOptions';


@Component({
	selector: 'app-chart',
	template: `
		<div *ngIf="options as chart" id="chart" style="text-align:center">
			<apx-chart
				[series]="chart.series"
				[chart]="chart.chart"
				[labels]="chart.labels"
				[responsive]="chart.responsive"

			></apx-chart>
		</div>`,
	styles: [`
		#chart {
			max-width: 650px;
			margin: 35px auto;
		}`]
})
export class ChartComponent implements OnInit, OnChanges {
	@Input() options?: ChartOptions | null;
	@ViewChild("chart") chart?: ChartApexComponent;

	constructor() {
	}

	ngOnInit(): void {
	}

	ngOnChanges(changes: SimpleChanges): void {

	}

}
