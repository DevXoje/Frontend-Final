import { Injectable } from '@angular/core';
import {
	Router,
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrderService } from '../../services/order.service';

@Injectable({
	providedIn: 'root',
})
export class StripeIntentResolver implements Resolve<boolean> {
	constructor(private orderService: OrderService) {}
	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> {
		console.log('StripeIntentResolver.resolve');
		console.log(state);

		return of(true);
	}
}
