import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {ChartOptions, ChartSeries, witXaxis} from 'src/app/app-common/domain/chartOptions';
import {Product} from 'src/app/product/domain/product.model';
import {GetAllProducts, ProductState} from 'src/app/product/state';
import {ApexAxisChartSeries, ApexChart, ApexNonAxisChartSeries, ApexTitleSubtitle, ChartComponent} from "ng-apexcharts";


@Component({
	selector: 'app-chart-products',
	template: `
		<app-chart [options]="chartOptions|async"></app-chart>
	`
})
export class ChartProductsComponent implements OnInit, OnChanges {//, TableCustom: edit,delete
	@Input() chartModel?: ApexChart;
	@Select(ProductState.getProductList) products$?: Observable<Product[]>;
	@ViewChild("chart") chart?: ChartComponent;
	public chartOptions?: Observable<ChartOptions>;


	constructor(
		private store: Store,
	) {

	}

	ngOnInit(): void {

	}

	ngOnChanges(changes: SimpleChanges): void {
		this.store.dispatch(GetAllProducts)
		if (changes["chartModel"] && this.chartModel !== undefined) {
			const title: ApexTitleSubtitle = {
				text: 'Products',
				align: 'left',
				margin: 10,
				offsetX: 0,
				offsetY: 0,
				floating: false,
				style: {
					fontSize: '16px',
					fontWeight: 'bold',
					color: '#263238'
				}
			}
			const chart = this.chartModel as ApexChart;

			//const options: ChartOptions = {};
			this.products$?.subscribe({
				next: products => {
					const product_stock = products.map(product => {
						return {
							x: product.name,
							y: product.stock
						};
					});
					const productsAxisSeries: ApexAxisChartSeries = [
						{data: product_stock}
					];
					const labels = products.map(product => product.name);
					const productsNonAxisSeries: ApexNonAxisChartSeries = products.map(product => product.stock);
					let series: ChartSeries = witXaxis(chart.type) ? productsAxisSeries : productsNonAxisSeries;


					const options: ChartOptions = {
						series,
						chart,
						labels,
						dataLabels: {},
						responsive: [
							{
								breakpoint: 480,
								options: {
									chart: {
										width: 200
									},
									legend: {
										position: "bottom"
									}
								}
							}
						],
						title
					}
					this.chartOptions = of(options);
				},
				error: e => console.error(e),
			});
		}
	}


}
