import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Product } from '@shared/product/domain/product.model';
import { ProductService } from '@shared/product/infrastructure/services';
import { Observable } from 'rxjs';
import { GetProducts } from '@shared/product/infrastructure/ngxs/product.actions';
import { ProductState } from '@shared/product/infrastructure/ngxs/product.state';
import { AppComponent } from 'src/app/app.component';

type List = {
	title: string;
	items: Product[];
	page: number;
}

@Component({
	selector: 'app-shop-lists-collection',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './store-lists-collection.component.html',
})
export class StoreListsCollectionComponent implements OnInit, OnChanges {
	@Select(ProductState.getProductsList) products$!: Observable<Product[]>;
	lists: List[] = [];
	list_best_sellers: Product[] = [];
	list_new_products: Product[] = [];
	list_top_products: Product[] = [];

	store: Store;
	pageSize = 3;
	constructor() {
		this.store = AppComponent.store;
	}
	ngOnInit() {
		this.store.dispatch(GetProducts);
		//this.products$ = this.store.select(ProductState.getProductsList);
		this.store.select(ProductState.getProductsList)
			.subscribe((products) => {
				this.list_best_sellers = products;
				this.list_new_products = products;
				this.list_top_products = products;
				//this.list_best_sellers = products.sort((a, b) => a.price - b.price).slice(0, 6);
				//this.list_new_products = products.sort((a, b) => {const date1 = a.created_at as Date;const date2 = b.created_at as Date;return date2.getTime() - date1.getTime();				}).slice(0, 6);
				this.lists = [
					{
						title: 'List 1',
						page: 1,
						items: this.list_best_sellers
					},
					{
						title: 'List 2',
						page: 1,
						items: this.list_new_products
					},
					{
						title: 'List 3',
						page: 1,
						items: this.list_top_products
					}
				]
			});
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log(`changes storelist`, changes);
	}


}
