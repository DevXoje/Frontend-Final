import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Product} from 'src/app/product/domain/product.model';
import {ProductState} from 'src/app/product/state';


@Component({
	selector: 'app-details-product',
	template: `
		details
	`
})
export class DetailsProductComponent implements OnInit {//, TableCustom: edit,delete
	@Select(ProductState.getSelectedProduct) product$?: Observable<Product>;


	constructor(
		private store: Store,
	) {

	}

	ngOnInit(): void {
	}


}
