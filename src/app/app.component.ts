import { Component } from '@angular/core';


@Component({
	selector: 'app-root',
	template:`<router-outlet></router-outlet>`
})
export class AppComponent {

	title = 'Frontend-Final';

	/* 	logo = `<div class="nav__logo"><img src="https://via.placeholder.com/468x120?text=Logo" alt="LOGO"></div>`;
	logo: HTMLDivElement=document.createElement('div');*/
	constructor() {

	}
}
