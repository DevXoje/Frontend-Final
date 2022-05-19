import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {catchError, Observable, of, tap, throwError} from 'rxjs';
import {HttpResponse} from 'src/app/app-common/services/HttpGenericAdapter';
import {Auth, AuthStateModel, LoginResponse,} from '../domain/auth.model';
import {AuthService} from '../services/auth.service';
import {TokenService} from '../services/token.service';
import {DeleteUser, GetAllUsers, Login, Logout, Restore, Signup} from './auth.actions';
import {CustomerService} from "../../customer/services/customer.service";
import {Customer} from "../../customer/domain/customer.model";

const defaults = {
	users: [] as Auth[],
	selectedUser: {} as Auth,
};

@State<AuthStateModel>({
	name: 'auth',
	defaults,
})
@Injectable()
export class AuthState {
	constructor(
		private readonly authService: AuthService,
		private readonly customerService: CustomerService,
		private token: TokenService
	) {
	}

	@Selector()
	public static getAuthList({users}: AuthStateModel): Auth[] {
		return users;
	}

	@Selector()
	public static getSelectedAuth({selectedUser}: AuthStateModel) {
		return selectedUser;
	}

	@Action(Login)
	login(
		{getState, patchState}: StateContext<AuthStateModel>,
		{loginData}: Login
	): Observable<HttpResponse<LoginResponse>> {
		return this.authService.login(loginData).pipe(
			tap((resp: HttpResponse<LoginResponse>) => {
				this.token.handleData(JSON.stringify(resp.data.token));
				patchState({
					users: [...getState().users],
					selectedUser: resp.data.auth,
				});
			}),
			catchError((err: HttpErrorResponse) => {
				return throwError(() => new Error("Login Falla=> " + err.message));
			})
		);
	}

	@Action(Restore)
	restore({
				getState,
				patchState,
			}: StateContext<AuthStateModel>): Observable<HttpResponse<Auth>> {
		return this.authService.restore().pipe(
			tap((resp: HttpResponse<Auth>) => {
				patchState({
					users: [...getState().users],
					selectedUser: resp.data,
				});
			}),
			catchError((err: HttpErrorResponse) => {
				return throwError(() => new Error("Restore Falla=> " + err.message));
			})
		);
	}

	@Action(Logout)
	logout({getState, patchState}: StateContext<AuthStateModel>) {
		return this.authService.logout().pipe(
			tap(() =>
				patchState({
					users: [],
					selectedUser: {} as Auth,
				})
			),
			catchError((error: HttpErrorResponse): Observable<any> => {
				// we expect 404, it's not a failure for us.
				if (error.status === 404) {
					return of(null); // or any other stream like of('') etc.
				}

				// other errors we don't know how to handle and throw them further.
				return throwError(() => error);
			})
		);
	}

	@Action(Signup)
	signup(
		{getState, patchState}: StateContext<AuthStateModel>,
		{registerData}: Signup
	): Observable<Auth> {
		return this.authService.signup(registerData).pipe(
			tap((auth: any) => {
				const state = getState();
				console.log(auth);

				/* patchState({
					users: [...state.users],
					selectedUser:
				}); */
			})
		);
	}

	@Action(GetAllUsers)
	getAll({
			   getState,
			   patchState,
		   }: StateContext<AuthStateModel>): Observable<HttpResponse<Auth[]>> {
		return this.customerService.getAll().pipe(
			tap((resp: HttpResponse<Auth[]>) => {
				console.log(resp);
				patchState({
					users: [...resp.data],
					selectedUser: getState().selectedUser,
				});
			})
			/* tap((auth: Auth) => {
				const state = getState();
				patchState({
					users: [...state.users],
					selectedUser: auth
				});
			}) */
		);
	}

	@Action(DeleteUser)
	deleteUser({
				   getState,
				   patchState,
			   }: StateContext<AuthStateModel>, {id}: DeleteUser): Observable<HttpResponse<Customer>> {
		return this.customerService.delete(id).pipe(
			tap((resp: HttpResponse<Customer>) => {
				patchState({
					users: [...getState().users],
					selectedUser: getState().selectedUser,
				});
			})
		);
	}


	/* 	@Action(GetSelectedUser)
	getSelectedUser({
		getState,
		patchState,
	}: StateContext<AuthStateModel>): Observable<Auth[]> {
		return this.authService.getAll().pipe(
			tap((users: Auth[]) => {
				const state = getState();
				patchState({
					users: [...users],
					selectedUser: state.selectedUser as Auth,
				});
			})

		);
	} */

	/* @Action(GetAuths)
	getAuth({
		getState,
		setState,
	}: StateContext<AuthsStateModel>): Observable<Auth[]> {
		return this.authService.getAuths().pipe(
			tap((auths: Auth[]) => {
				const state = getState();
				setState({ ...state, auths });
			})
		);
	}

	@Action(UpdateAuth)
	updateAuth(
		{ getState, setState }: StateContext<AuthsStateModel>,
		{ payload }: UpdateAuth
	): Observable<Auth[]> {
		return this.authService.updateAuth(payload).pipe(
			tap((auths: Auth[]) => {
				const state = getState();
				setState({ ...state, auths });
			})
		);
	}

	@Action(DeleteAuth)
	deleteAuth(
		{ getState, patchState }: StateContext<AuthsStateModel>,
		{ id }: DeleteAuth
	): Observable<Auth[]> {
		return this.authService.deleteAuth(id).pipe(
			tap((auths: Auth[]) => {
				const state = getState();
				patchState({ ...state.auths, auths });
			})
		);
	} */
}
