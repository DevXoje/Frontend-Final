import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-secure',
	template: `
	<!-- <app-nav-admin></app-nav-admin> -->
	<div class="container text-center">
		<router-outlet></router-outlet>
	</div>`
})
export class SecureComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
