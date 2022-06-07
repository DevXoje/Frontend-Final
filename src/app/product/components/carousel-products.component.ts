import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Product} from 'src/app/product/domain/product.model';
import {ProductState} from 'src/app/product/state';
import {Carousel} from "../../app-common/domain/carousel";


@Component({
	selector: 'app-carousel-products',
	template: `
		<app-carousel [carousel1]="carousel"></app-carousel>
	`
})
export class CarouselProductsComponent implements OnInit {//, TableCustom: edit,delete
	@Select(ProductState.getProductList) products$?: Observable<Product[]>;

	carousel: Carousel = {} as Carousel;

	constructor(
		private store: Store,
	) {

	}

	ngOnInit(): void {
		this.products$?.subscribe(products => {
			this.carousel = {
				items: products.map(product => {
					return {
						image: product.image,
						caption: product.name,
						description: product.description
					}
				}),
				config: {
					interval: 10000,
					wrap: false,
					keyboard: false,
					pauseOnHover: false,
				}
			}
		});
	}


}
