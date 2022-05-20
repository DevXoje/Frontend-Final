import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartComponent as ChartApexComponent} from 'ng-apexcharts';
import {ChartOptions, Options} from '../../domain/chartOptions';


@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styles: [`
		#chart {
			max-width: 650px;
			margin: 35px auto;
		}`]
})
export class ChartComponent implements OnInit, OnChanges {
	@Input() options: Options | null = {
		title: "",
		serie: [{name: "", data: []}],
		type: "line",
		categories: []
	};
	/*@Input() chartOptions: Observable<Partial<ChartOptions>>*/
	chartOptions?: ChartOptions;


	@ViewChild("chart") chart?: ChartApexComponent;

	constructor() {
		if (this.options) {
			console.log("options", this.options);
			this.chartOptions = {
				series: this.options.serie,
				chart: {
					height: 350,
					type: "bar",
					zoom: {
						enabled: false
					}
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: "straight"
				},
				title: {
					text: this.options.title,
					align: "left"
				},
				grid: {
					row: {
						colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
						opacity: 0.5
					}
				},
				xaxis: {
					categories: this.options.categories
				}
			};
		}

	}

	ngOnInit(): void {
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["options"] && this.options) {
			console.log("options", this.options);
			this.chartOptions = {
				series: this.options.serie,
				chart: {
					height: 350,
					type: "bar",
					zoom: {
						enabled: false
					}
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: "straight"
				},
				title: {
					text: this.options.title,
					align: "left"
				},
				grid: {
					row: {
						colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
						opacity: 0.5
					}
				},
				xaxis: {
					categories: this.options.categories
				}
			};
		}
	}

}
