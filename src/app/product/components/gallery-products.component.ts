import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/auth/domain/auth.model';
import { AuthState } from 'src/app/auth/state/auth.state';
import { Product } from 'src/app/product/domain/product.model';
import { GetAllProducts } from 'src/app/product/state/product.actions';
import { ProductState } from 'src/app/product/state/product.state';
import { AddProductToOrder } from 'src/app/shop/state/shop.actions';

@Component({
	selector: 'app-gallery-products',
	template: `<app-gallery-cards
		[datos]="products$"
		[btn_text]="'Add to cart'"
		(outClicked)="handleClick($event)"
	></app-gallery-cards>`,
})
export class GalleryProductsComponent implements OnInit {
	@Select(ProductState.getProductList)
	products$?: Observable<Product[]>;
	@Select(AuthState.getSelectedAuth)
	customer$?: Observable<Auth>;
	constructor(private store: Store, private modalService: NgbModal) {}
	ngOnInit(): void {
		this.store.dispatch(GetAllProducts);
		this.store.select(ProductState.getProductList);
	}
	handleClick(product_id: number) {
		this.customer$?.subscribe((user) =>
			this.store.dispatch(new AddProductToOrder(user.id, product_id))
		);
	}
}
