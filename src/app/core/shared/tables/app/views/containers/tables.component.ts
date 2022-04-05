import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tables',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<app-layout-dashboard>
		<app-dashboard-head title="Tables" [hideBreadcrumbs]="false"></app-dashboard-head>
		<app-card>
			<div class="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea recusandae deleniti cupiditate cum quo, facere repellat illum praesentium, quos esse eaque veniam quasi voluptatum incidunt voluptate placeat explicabo molestiae. Quo?</div>
		</app-card>
		<app-card>
			<div class="card-header">
				<fa-icon class="mr-1" [icon]='["fas", "table"]'></fa-icon>DataTable Example</div>
				<div class="card-body">
				<app-table-products [pageSize]="4"></app-table-products>
			</div>
		</app-card>
	</app-layout-dashboard>`
})
export class TablesComponent implements OnInit {
	constructor() { }
	ngOnInit() { }
}
