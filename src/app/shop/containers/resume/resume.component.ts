import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {GetAllProducts} from "../../../product/state";

@Component({
	selector: 'app-shop-resume',
	templateUrl: './resume.component.html',
	styles: [``],
})
export class ShopResumeComponent implements OnInit {

	constructor(private store: Store, private config: NgbCarouselConfig) {
		this.store.dispatch(GetAllProducts);

	}

	ngOnInit(): void {
	}


}
