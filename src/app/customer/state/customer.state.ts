import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Observable, tap} from 'rxjs';
import {HttpResponse} from 'src/app/app-common/services/HttpGenericAdapter';
import {Customer, CustomerStateModel} from "../domain/customer.model";
import {CustomerService} from "../services/customer.service";
import {GetAllCustomers, SetSelectedCustomer, UpdateCustomer} from "./customer.actions";


const defaults: CustomerStateModel = {
	customers: [],
	selectedCustomer: {} as Customer,
};

@State<CustomerStateModel>({
	name: 'customer',
	defaults,
})
@Injectable()
export class CustomerState {
	constructor(private readonly customerService: CustomerService) {
	}

	@Selector()
	public static getCustomerList({customers}: CustomerStateModel): Customer[] {
		return customers;
	}

	@Selector()
	public static getSelectedCustomer({selectedCustomer}: CustomerStateModel) {
		return selectedCustomer;
	}

	@Action(GetAllCustomers)
	getAll({
			   getState,
			   patchState,
		   }: StateContext<CustomerStateModel>): Observable<HttpResponse<Customer[]>> {
		return this.customerService.getAll().pipe(
			tap((resp: HttpResponse<Customer[]>) => {
				patchState({
					customers: [...resp.data],
					selectedCustomer: getState().selectedCustomer,
				});
			})
		);
	}

	@Action(SetSelectedCustomer)
	public setSelectedCustomer(
		{getState, patchState}: StateContext<CustomerStateModel>,
		toStoreCustomer: SetSelectedCustomer
	): Observable<HttpResponse<Customer>> {
		return this.customerService.getById(toStoreCustomer.id).pipe(
			tap((resp: HttpResponse<Customer>) => {
				patchState({
					customers: [...getState().customers],
					selectedCustomer: resp.data,
				});
			})
		);
	}

	@Action(UpdateCustomer)
	public updateCustomer(
		{getState, patchState}: StateContext<CustomerStateModel>,
		toUpdateCustomer: UpdateCustomer
	): Observable<HttpResponse<Customer>> {
		return this.customerService.update(toUpdateCustomer.customer).pipe(
			tap((resp: HttpResponse<Customer>) => {
				patchState({
					customers: [...getState().customers],
					selectedCustomer: resp.data,
				});
			})
		);
	}

}
