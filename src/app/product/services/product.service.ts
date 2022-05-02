import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { HttpResponse } from 'src/app/app-common/services/HttpGenericAdapter';
import { environment } from 'src/environments/environment';
import { Product, ProductServiceInterface } from '../domain/product.model';
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

	getById(id: number): Observable<HttpResponse<Product>> {
		return from(this.productService.getById(id));
	}
}
