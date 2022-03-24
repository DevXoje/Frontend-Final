import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment.prod';
import { Cart, CartServiceInterface } from '@public/cart/domain/cart.model';
import { from, Observable, of } from 'rxjs';
import { HttpCartAdapter } from './HttpCartAdapter';

@Injectable({ providedIn: 'root' })
export class CartService {
	private authUrl = environment.baseUrl + '/cart';
	private cartService: CartServiceInterface = new HttpCartAdapter(this.http, this.authUrl);
	constructor(private http: HttpClient) { }
	getCart(id: number): Observable<Cart> {
		return from(this.cartService.getCart(id));
	}
	

}