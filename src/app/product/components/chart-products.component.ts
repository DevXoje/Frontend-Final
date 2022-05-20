import {Component, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {Options} from 'src/app/app-common/domain/chartOptions';
import {Product} from 'src/app/product/domain/product.model';
import {GetAllProducts, ProductState} from 'src/app/product/state';
import {ApexTitleSubtitle, ChartComponent} from "ng-apexcharts";


@Component({
	selector: 'app-chart-products',
	template: `
		<app-chart [options]="chartOptions|async"></app-chart>
	`
})
export class ChartProductsComponent implements OnInit {//, TableCustom: edit,delete
	@Select(ProductState.getProductList) products$?: Observable<Product[]>;
	@ViewChild("chart") chart?: ChartComponent;
	public chartOptions?: Observable<Options>;

	constructor(
		private store: Store,
	) {

	}

	ngOnInit(): void {
		this.store.dispatch(GetAllProducts)
		this.products$?.subscribe({
			next: products => {
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
				/*const options: ChartOptions = {
					series: [
						{
							name: "Desktops",
							data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
						}
					],
					chart: {
						height: 350,
						type: "line",
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
						text: "Product Trends by Month",
						align: "left"
					},
					grid: {
						row: {
							colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
							opacity: 0.5
						}
					},
					xaxis: {
						categories: [
							"Jan",
							"Feb",
							"Mar",
							"Apr",
							"May",
							"Jun",
							"Jul",
							"Aug",
							"Sep"
						]
					}
				};*/
				const products_name = products.map(product => product.name);
				const products_stock = products.map(product => product.stock);
				this.chartOptions = of({
					title: "Stock actual",
					serie: [{name: "Stock", data: products_stock}],
					type: "line",
					categories: products_name,
				});
			},
			error: e => console.error(e),
		});
	}


}
