import {Component, OnInit} from '@angular/core';
import {GetAllProducts} from "../../product/state";
import {Store} from "@ngxs/store";

@Component({
	selector: 'app-resume',
	template: `
		<app-table-products></app-table-products>
		<app-chart-total-products></app-chart-total-products>
		<app-chart-bestsellers-products></app-chart-bestsellers-products>
	`
})
export class AdminResumeComponent implements OnInit {

	constructor(private store: Store) {
	}

	ngOnInit(): void {
		this.store.dispatch(GetAllProducts)

	}

}
