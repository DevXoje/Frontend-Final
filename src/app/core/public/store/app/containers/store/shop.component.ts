import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Category } from '@shared/category/domain/category.model';
import { CategoryService } from '@shared/category/infrastructure/services';
import { Product } from '@shared/product/domain/product.model';
import { ProductService } from '@shared/product/infrastructure/services';
import { from, Observable } from 'rxjs';
import { AddProduct, DeleteProduct, GetProduct, GetProducts, UpdateProduct } from '@shared/product/infrastructure/ngxs/product.actions';
import { ProductState } from '@shared/product/infrastructure/ngxs/product.state';
import { CategoryState } from '@shared/category/infrastructure/ngxs/category.state';
import { GetCategories } from '@shared/category/infrastructure/ngxs/category.actions';

@Component({
	selector: 'app-shop',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<app-layout-store>
		<app-shop-head title="Dashboard" [hideBreadcrumbs]="false"></app-shop-head>
		<app-shop-carrousel></app-shop-carrousel>
		<app-shop-galery></app-shop-galery>
		<app-shop-calltoaction></app-shop-calltoaction>
		<app-shop-lists-collection></app-shop-lists-collection>
		<!-- <app-dashboard-tables></app-dashboard-tables>
		<app-dashboard-cards></app-dashboard-cards>
		<app-dashboard-charts></app-dashboard-charts>
		<app-dashboard-tables></app-dashboard-tables> -->
	</app-layout-store>`
})
export class ShopComponent implements OnInit, AfterViewInit {
	/* @Select(ProductState.getProductsList) products$!: Observable<Product[]>; */
	//@Select(CategoryState.getCategoriesList) categories$!: Observable<Category[]>;
	categories_names!: string[];
	constructor(
		public categoryService: CategoryService,
		public productService: ProductService,
	) {

	}
	async ngOnInit() {
		//this.store.dispatch(GetProducts);
		//this.store.dispatch(GetCategories);
		//this.products$ = this.store.select(ProductState.getProductsList);
		//this.categories$ = this.store.select(CategoryState.getCategoriesList);

		/* this.categories.then(categories => {
			this.categories_names = categories.map(category => category.name);
		}); */

	}

	ngAfterViewInit(): void { }
	/* onAddProduct() {
		const product: Product = {
			id: 20,
			name: 'Adios mundo!',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			price: 100,
			category: 'category',
			image: 'https://picsum.photos/200/300/?random',
		};
		//this.store.dispatch(new AddProduct(product));
	}

	onUpdateProduct(): void {
		const updateProduct = {
			id: 20,
			name: 'Adios mundo!',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			price: 100,
			category: 'category',
			image: 'https://picsum.photos/200/300/?random',
		};
		//this.store.dispatch(new UpdateProduct(updateProduct));
	}

	onDeleteProduct(): void {
		//this.store.dispatch(new DeleteProduct(4));
	}
 */
}
