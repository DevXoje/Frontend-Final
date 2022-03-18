import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProductService } from '@shared/product/infrastructure/services';

@Component({
	selector: 'app-dashboard-tables',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<app-card>
		<div class="card-header">
			<fa-icon class="mr-1" [icon]='["fas", "table"]'></fa-icon>Clientes
		</div>
		<div class="card-body">
			<app-table-customers [pageSize]="4"></app-table-customers>
		</div>
	</app-card>
	<app-card>
		<div class="card-header">
			<fa-icon class="mr-1" [icon]='["fas", "table"]'></fa-icon>Productos
		</div>
		<div class="card-body">
			<app-table-products [pageSize]="4"></app-table-products>
		</div>
	</app-card>	`
})
export class DashboardTablesComponent implements OnInit {
	constructor(private productService: ProductService) { }
	ngOnInit() { }
}
