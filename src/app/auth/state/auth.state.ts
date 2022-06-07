import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {catchError, Observable, of, tap, throwError} from 'rxjs';
import {HttpResponse} from 'src/app/app-common/services/HttpGenericAdapter';
import {Auth, AuthStateModel, LoginResponse,} from '../domain/auth.model';
import {AuthService} from '../services/auth.service';
import {TokenService} from '../services/token.service';
import {
	CompleteUser,
	DeleteUser,
	GetAllUsers,
	Login,
	Logout,
	Restore,
	SetSelectedUser,
	Signup,
	UpdateUser
} from './auth.actions';
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
			tap((resp: HttpResponse<Auth>) =>
				patchState({
					users: [...getState().users],
					selectedUser: resp.data,
				})
			),
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
		return this.authService.signup(registerData).pipe(//TODO: Tipar resp con el modelo de respuesta
			//tap((auth: HttpResponse<Auth>) => {
			tap((resp: any) => {
				const state = getState();
				console.log(resp);

				/* patchState({
					users: [...state.users],
					selectedUser:
				}); */
			}),
			catchError((err: HttpErrorResponse) => {
				return throwError(() => new Error("Restore Falla=> " + err.message));
			})
		);
	}

	@Action(GetAllUsers)
	getAll({
			   getState,
			   patchState,
		   }: StateContext<AuthStateModel>): Observable<HttpResponse<Auth[]>> {
		return this.authService.getAll().pipe(
			tap((resp: HttpResponse<Auth[]>) => {
				patchState({
					users: [...resp.data],
					selectedUser: getState().selectedUser,
				});
			}),
			catchError((err: HttpErrorResponse) => {
				return throwError(() => new Error("Restore Falla=> " + err.message));
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


	@Action(SetSelectedUser)
	getSelectedUser({
						getState,
						patchState,
					}: StateContext<AuthStateModel>,
					{id}: SetSelectedUser): Observable<HttpResponse<Auth>> {
		return this.authService.getById(id).pipe(
			tap((resp: HttpResponse<Auth>) => {
				patchState({
					users: [...getState().users],
					selectedUser: resp.data,
				});
			})
		);
	}

	@Action(UpdateUser)
	updateAuth(
		{getState, setState}: StateContext<AuthStateModel>,
		{user}: UpdateUser
	): Observable<HttpResponse<Auth>> {
		return this.authService.update(user).pipe(
			tap((resp: HttpResponse<Auth>) => {
				setState(
					{
						users: [...getState().users],
						selectedUser: resp.data,
					}
				);
			})
		);
	}

	@Action(CompleteUser)
	completeUser(
		{getState, setState}: StateContext<AuthStateModel>,
		{user}: CompleteUser
	): Observable<HttpResponse<Customer>> {
		return this.customerService.complete(user).pipe(
			tap((resp: HttpResponse<Customer>) => {
				setState(
					{
						users: [...getState().users],
						selectedUser: resp.data,
					}
				);
			})
		);
	}

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
