import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { CreateResponse } from 'src/app/app-common/services/HttpGenericAdapter';
import { Auth, AuthStateModel, LoginResponse } from '../domain/auth.model';
import { AuthService } from '../services/auth.service';
import { GetAllUsers, Login, Logout, Restore, Signup } from './auth.actions';
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
	constructor(private readonly authService: AuthService) {}

	@Selector()
	public static getAuthList({ users }: AuthStateModel): Auth[] {
		return users;
	}

	@Selector()
	public static getSelectedAuth({ selectedUser }: AuthStateModel) {
		return selectedUser;
	}

	@Action(Login)
	login(
		{ getState, patchState }: StateContext<AuthStateModel>,
		{ loginData }: Login
	): Observable<LoginResponse> {
		return this.authService.login(loginData).pipe(
			tap((auth: LoginResponse) => {
				const state = getState();
				localStorage.setItem('token', JSON.stringify(auth));
				console.log(this.authService.getStoredToken());

				patchState({
					users: [...state.users],
					selectedUser: auth.user,
				});
			})
		);
	}
	@Action(Restore)
	restore(
		{ getState, patchState }: StateContext<AuthStateModel>,
		{ restoreData }: Restore
	): Observable<LoginResponse> {
		return this.authService.restore(restoreData).pipe(
			tap((auth: LoginResponse) => {
				const state = getState();
				localStorage.setItem('token', JSON.stringify(auth));
				console.log(this.authService.getStoredToken());

				patchState({
					users: [...state.users],
					selectedUser: auth.user,
				});
			})
		);
	}
	@Action(Logout)
	logout(
		{ getState, patchState }: StateContext<AuthStateModel>,
		{ id }: Logout
	) {
		return this.authService.logout(id).pipe(
			tap(() => {
				const state = getState();
				patchState({
					users: [...state.users],
					selectedUser: {} as Auth,
				});
			}),
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
		{ getState, patchState }: StateContext<AuthStateModel>,
		{ registerData }: Signup
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
	}: StateContext<AuthStateModel>): Observable<Auth[]> {
		return this.authService.getAll().pipe(
			tap((users: Auth[]) => {
				const state = getState();
				patchState({
					users: [...users],
					selectedUser: state.selectedUser as Auth,
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
