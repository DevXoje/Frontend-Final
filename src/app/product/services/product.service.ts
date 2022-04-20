import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
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
	private productMocked: Product[] = [
		{
			id: 1,
			name: 'Producto 1',
			description: 'Descripcion del producto 1',
			price: 100,
			quantity: 10,
			created_at: '2020-01-01',
			updated_at: '2020-01-01',
			image: 'https://www.google.com/url?sa=i&,url=https%3A%2F%2Fwww.elmundo.es%2Fcultura%2Fnoticia%2F2020%2F01%2F01%2F5e2f8f9c-f8f9-11ea-9f3f-0242ac130003_noticia_157878.html&psig=AOvVaw2_Z_ZYZYZYZYZYZYZYZYZY&ust=1581207838897000',
			category_id: 1,
		},
		{
			id: 2,
			name: 'Producto 2',
			description: 'Descripcion del producto 2',
			price: 200,
			quantity: 5,
			created_at: '2020-01-01',
			updated_at: '2020-01-01',
			image: 'https://www.google.com/url?sa=i&,url=https%3A%2F%2Fwww.elmundo.es%2Fcultura%2Fnoticia%2F2020%2F01%2F01%2F5e2f8f9c-f8f9-11ea-9f3f-0242ac130003_noticia_157878.html&psig=AOvVaw2_Z_ZYZYZYZYZYZYZYZYZY&ust=1581207838897000',
			category_id: 1,
		},
	];
	getAll(): Observable<Product[]> {
		return from(this.productService.getAll());
	}
	ordenBy(order: ProductSearch): Observable<Product[]> {
		const productsSorted = this.productMocked.sort((a, b) => {
			return a[order] < b[order] ? -1 : a[order] > b[order] ? 1 : 0;
		});
		return of(productsSorted);
	}
	getById(id: number): Observable<Product> {
		return from(this.productService.getById(id));
	}
	updateProduct(product: Partial<Product>): Observable<Product> {
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
	}
}
