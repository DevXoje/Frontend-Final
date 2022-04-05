import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SortColumn } from '@shared/app-common/app/views/components/list/sortable-header.directive';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@shared/product/infrastructure/services';
import { Product } from '@shared/product/domain/product.model';

@Component({
	selector: 'app-list-products',
	template: `<app-list [data]="products" [titulos]="titulos" [title]="title"></app-list>`,
})
export class ListProductsComponent implements OnInit {

	productDefault: Product = {
		id: 0,
		name: '',
		category: 'all',
		description: '',
		price: 0,
		image: '',
		remenber_token: '',
		created_at: '',
		updated_at: '',
	};

	products: Product[] = [];
	titulos: SortColumn[] = [];
	PRODUCTS_DEFAULT: Product[] = [];
	atributos: string[] = [];
	title: string = 'Lista de Productos';

	constructor(private _Activatedroute: ActivatedRoute, private productsService: ProductService) { }

	ngOnInit(): void {

		if (this._Activatedroute.snapshot.data.products !== undefined) {
			this.products = this._Activatedroute.snapshot.data.products;
			console.log('from resolve');
		} else {
			this.products = this.productsService.getProducts();
			console.log('from service');
		}
		this.titulos = Object.keys(this.productDefault) as SortColumn[];


	}

}
