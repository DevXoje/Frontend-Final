import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from '@shared/category/domain/category.model';
import { CategoryService } from '@shared/category/infrastructure/services';
import { Product } from '@shared/product/domain/product.model';
import { ProductService } from '@shared/product/infrastructure/services';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-store',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<app-layout-store>
		<app-store-head title="Dashboard" [hideBreadcrumbs]="false" [categories_names]="categories_names"></app-store-head>
		<app-store-carrousel [categories]="categories|async"></app-store-carrousel>
		<app-store-galery [categories_names]="categories_names" [products]="products|async"></app-store-galery>
		<app-store-calltoaction></app-store-calltoaction>
		<app-store-lists-collection [list_best_sellers]="products|async" [list_new_products]="products|async" [list_top_products]="products|async"></app-store-lists-collection>
		<!-- <app-dashboard-tables></app-dashboard-tables>
		<app-dashboard-cards></app-dashboard-cards>
		<app-dashboard-charts></app-dashboard-charts>
		<app-dashboard-tables></app-dashboard-tables> -->
	</app-layout-store>`
})
export class StoreComponent implements OnInit, AfterViewInit {
	categories!: Promise<Category[]>;
	categories_names!: string[];
	products!: Promise<Product[]>;
	constructor(
		public categoryService: CategoryService,
		public productService: ProductService
	) {

	}
	async ngOnInit() {
		this.categories = this.categoryService.getCat();
		this.products = this.productService.getProd();
		this.categories.then(categories => {
			this.categories_names = categories.map(category => category.name);
		});
		/* this.productService.getProductsObservable().subscribe(
			products => {
				this.products = products;
				console.log("susb", this.products);
			},
			error => {
				console.log("error", error);
			},
		);
		this.categoryService.getCategoriesObservable().subscribe(
			categories => {
				this.categories = categories;
				this.categories_names = categories.map(c => c.name);
				console.log("susb", this.categories);
			},
			error => {
				console.log("error", error);
			},
		); */
	}

	ngAfterViewInit(): void {
		/* 	setTimeout(() => {
				console.log("categories", this.categories);
				console.log("products", this.products);
	
			}, 10000); */
	}
}
