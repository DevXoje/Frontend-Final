import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services';
import { Login, Logout, SignUp } from './auth.actions';
import { AuthStateModel, LoginData, SignUpData } from '@shared/auth/domain/auth.model';

const defaults: AuthStateModel = {
  selectedUser: null
};
@State<AuthStateModel>({
  name: 'auth',
  defaults
})
@Injectable()
export class AuthState {

  @Selector()
  static token(state: AuthStateModel) {
    return state.selectedUser?.token;
  }

  @Selector()
  static userDetails(state: AuthStateModel) {
    return {
      name: state.selectedUser?.name,
      user_name: state.selectedUser?.user_name,
      password: state.selectedUser?.password
    };
  }
  /* @Selector()
  static refreshToken(state: AuthStateModel) {
    return state.refreshToken;
  } */

  constructor(private authService: AuthService) { }
/* 
  @Action(Login)
  login(
    { patchState }: StateContext<AuthStateModel>,
    authData: LoginData
  ) {
    return this.authService.login(authData).pipe(
      tap(result => {
        patchState({
          selectedUser: result.selectedUser
        });
      })
    );
  } */

  @Action(Login)
  login(
    { patchState }: StateContext<AuthStateModel>,
    authData: LoginData
  ) {
    return this.authService.login(authData).pipe(
      tap(result => {
        patchState({
          selectedUser: result.selectedUser
        });
      })
    );
  }

  @Action(Logout)
  logout({ setState, getState }: StateContext<AuthStateModel>) {
    /* const { token } = getState();
    return this.authService.logout("").pipe(
      tap(_ => {
        setState({});
      })
    ); */
  }

  @Action(SignUp)
  signUp({ patchState }: StateContext<AuthStateModel>, authData: SignUpData) {
    return this.authService.signUp(authData).pipe(
      tap(result => {
        patchState({
          selectedUser: {
            token: result.token,
            name: result.name,
            user_name: result.user_name,
          }
        });
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