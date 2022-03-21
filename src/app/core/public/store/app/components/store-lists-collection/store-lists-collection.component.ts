import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '@shared/product/domain/product.model';
import { ProductService } from '@shared/product/infrastructure/services';

type List = {
	title: string;
	items: Product[];
	page: number;
}

@Component({
	selector: 'app-store-lists-collection',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './store-lists-collection.component.html',
})
export class StoreListsCollectionComponent implements OnInit, OnChanges {

	lists: List[] = [];
	@Input() list_best_sellers: Product[] | null = [];
	@Input() list_new_products: Product[] | null = [];
	@Input() list_top_products: Product[] | null = [];
	@Input() listas: any;

	pageSize = 3;
	constructor() { }
	ngOnChanges(changes: SimpleChanges): void {
		console.log(`changes:`, changes);
		if (this.list_best_sellers && this.list_best_sellers.length > 0 && this.list_new_products && this.list_top_products) {
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
		}
	}
	ngOnInit() { }

}
