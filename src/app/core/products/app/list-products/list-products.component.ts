import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/products/infrastructure/product.service';
import { Product } from 'src/app/core/products/domain/Products';
import { SortColumn } from 'src/app/core/shared/list/sortable-header.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-list-products',
	//template: `<app-list [data]="products" [titulos]="titulos" [title]="title"></app-list>`,
	template: `<app-list [data]="products" [title]="title"></app-list>`,
})
export class ListProductsComponent implements OnInit {

	productDefault: Product = {
		id: 0,
		name: '',
		description: '',
		price: 0,
		created_at: '',
		updated_at: '',
		image: ''
	};

	products: Product[] = [];
	titulos: SortColumn[] = [];
	PRODUCTS_DEFAULT: Product[] = [];
	atributos: string[] = [];
	title: string = 'Lista de Productos';

	constructor(private _Activatedroute: ActivatedRoute) { }

	ngOnInit(): void {
		this.products = this._Activatedroute.snapshot.data.products;
	}

}
