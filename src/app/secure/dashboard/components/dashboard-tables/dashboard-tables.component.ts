import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard-tables',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<app-card    >
		<div class="card-header"><fa-icon class="mr-1" [icon]='["fas", "table"]'></fa-icon>DataTable Example</div>
		<div class="card-body"><app-ng-bootstrap-table [pageSize]="4"></app-ng-bootstrap-table></div
	></app-card>`
})
export class DashboardTablesComponent implements OnInit {
	constructor() { }
	ngOnInit() { }
}
