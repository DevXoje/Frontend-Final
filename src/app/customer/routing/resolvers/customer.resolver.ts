import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../domain/customer.model";
import {HttpResponse} from "../../../app-common/services/HttpGenericAdapter";
import {Observable} from "rxjs";
import {AuthService} from "../../../auth/services/auth.service";

@Injectable({
	providedIn: 'root'
})
export class CustomerResolver implements Resolve<Observable<HttpResponse<Customer>>> {
	constructor(private customerService: CustomerService, private authService: AuthService) {
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HttpResponse<Customer>> {
		const id = parseInt(route.paramMap.get('id') as string);
		return this.authService.getById(id);

	}
}
