import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home-admin',
	template: ` <app-nav-admin></app-nav-admin>
				<app-list-products></app-list-products>
				<app-list-users></app-list-users>`
})
export class HomeAdminComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
