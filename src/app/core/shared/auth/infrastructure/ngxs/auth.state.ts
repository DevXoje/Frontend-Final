import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services';
import { Login, Logout } from './auth.actions';
import { LoginData } from '@shared/app-common/app/components/form/login-data';
import { AuthStateModel } from '@shared/auth/domain/auth.model';

const defaults: AuthStateModel = {};
@State<AuthStateModel>({
  name: 'auth',
  //defaults
})
@Injectable()
export class AuthState {

  @Selector()
  static token(state: AuthStateModel) {
    return state.token;
  }

  @Selector()
  static userDetails(state: AuthStateModel) {
    return {
      name: state.name,
      email: state.email
    };
  }
  /* @Selector()
  static refreshToken(state: AuthStateModel) {
    return state.refreshToken;
  } */

  constructor(private authService: AuthService) { }

  @Action(Login)
  login(
    { patchState }: StateContext<AuthStateModel>,
    authData: LoginData
  ) {
    return this.authService.login(authData).pipe(
      tap(result => {
        patchState({
          token: result.token,
          name: result.name,
          email: result.email
        });
      })
    );
  }

  @Action(Logout)
  logout({ setState, getState }: StateContext<AuthStateModel>) {
    const { token } = getState();
    return this.authService.logout("").pipe(
      tap(_ => {
        setState({});
      })
    );
  }

  /* @Action(GetAuth)
  getAuth(
    { patchState }: StateContext<AuthStateModel>,
    authData: LoginData
  ) {
    return this.authService.login(authData).pipe(
      tap(result => {
        patchState({
          token: result.token,
          name: result.name,
          email: result.email
        });
      })
    );
  } */
}