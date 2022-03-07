import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-light',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<app-layout-dashboard [light]="true">
		<app-dashboard-head title="Dashboard Light" [hideBreadcrumbs]="false"></app-dashboard-head>
		<app-dashboard-cards></app-dashboard-cards>
		<app-dashboard-charts></app-dashboard-charts>
		<app-dashboard-tables></app-dashboard-tables>
	</app-layout-dashboard>`
})
export class LightComponent implements OnInit {
	constructor() { console.log('LightComponent'); 
	}
	ngOnInit() { }
}
