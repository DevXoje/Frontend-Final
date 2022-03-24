import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-details',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<app-layout-store>
		
		<app-shop-details></app-shop-details>
		<app-shop-other-products></app-shop-other-products>
		
	</app-layout-store>`
})
export class DetailsComponent implements OnInit {
	data: any;
	constructor() {
		/* this.userService.user$.subscribe(user => {
			console.log('DashboardComponent user$', user);
		}); */
	}
	ngOnInit() { }
}
