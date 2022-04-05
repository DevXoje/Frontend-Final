import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard-head',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<h1 class="mt-4">{{title}}</h1>
		<app-breadcrumbs *ngIf="!hideBreadcrumbs"></app-breadcrumbs>`
})
export class DashboardHeadComponent implements OnInit {
	@Input() title!: string;
	@Input() hideBreadcrumbs = false;

	constructor() { }
	ngOnInit() { }
}
