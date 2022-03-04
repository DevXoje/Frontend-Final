import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
	selector: 'app-home-admin',
	template: `
	<h1>Bienvenido</h1>
				<!-- <app-list-products></app-list-products>
				<app-list-users></app-list-users> -->`
})
export class HomeAdminComponent implements OnInit {

	constructor(private readonly appComponent: AppComponent) {
		this.appComponent.setTitle("Home Admin")
	}

	ngOnInit(): void {
	}

}
