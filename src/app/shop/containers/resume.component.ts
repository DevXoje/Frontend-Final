import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';

@Component({
	selector: 'app-shop-resume',
	template: `
		<app-gallery-products></app-gallery-products>
		<app-carousel-products></app-carousel-products>
	`,
})
export class ShopResumeComponent implements OnInit {


	constructor(private store: Store) {
	}

	ngOnInit(): void {

	}

}
