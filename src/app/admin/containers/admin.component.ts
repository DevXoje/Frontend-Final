import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-dashboard',
	template: `
		<app-dashboard-layout>

			<app-admin-nav navigation></app-admin-nav>

			<router-outlet name="adminOutlet"></router-outlet>
		</app-dashboard-layout>
	`
})
export class AdminComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {

	}

}
