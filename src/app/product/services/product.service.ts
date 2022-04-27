import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { HttpResponse } from 'src/app/app-common/services/HttpGenericAdapter';
import { environment } from 'src/environments/environment';
import {
	Product,
	ProductSearch,
	ProductServiceInterface,
} from '../domain/product.model';
import { HttpProductAdapter } from './HttpProductAdapter';

@Injectable({ providedIn: 'root' })
export class ProductService {
	private productUrl = environment.baseUrl + '/products';
	private productService: ProductServiceInterface = new HttpProductAdapter(
		this.http,
		this.productUrl
	);
	constructor(private router: Router, private http: HttpClient) {}

	getAll(): Observable<HttpResponse<Product[]>> {
		return from(this.productService.getAll());
	}
	/* 	ordenBy(order: ProductSearch): Observable<HttpResponse<Product[]>> {
		const productsSorted = this.productMocked.sort((a, b) => {
			return a[order] < b[order] ? -1 : a[order] > b[order] ? 1 : 0;
		});
		return of(productsSorted);
	} */
	getById(id: number): Observable<HttpResponse<Product>> {
		return from(this.productService.getById(id));
	}
	/* updateProduct(product: Partial<Product>): Observable<Product> {
		let newProduct: Product = {} as Product;
		if (product.id) {
			const oldProduct = this.getById(product.id).subscribe(
				(oldProduct) => {
					console.log(oldProduct);
					console.log(product);

					newProduct = { ...oldProduct, ...product };
					newProduct = { ...product, ...oldProduct };
					console.log(newProduct);
				}
			);
		}

		return of(newProduct);
	} */
}
