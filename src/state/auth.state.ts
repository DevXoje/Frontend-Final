import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Auth } from '@shared/auth/domain/auth.model';
import { AddAuth, DeleteAuth, GetAuth } from './auth.actions';

export class AuthStateModel {
  public items!: string[];
  public id?: number;
}

const defaults = {
  items: []
};

@State<AuthStateModel>({
  name: 'auth',
  defaults
})
@Injectable()
export class AuthState {
  constructor(/* private readonly authService: any */) { }
  /* @Selector()
  public static getAuthList({ }: AuthStateModel): Auth[] {
    return auth;
  } */
 /*  @Selector()
  public static getSelectedAuth({selectAuth}): Auth {
    return selectAuth;
  } */


  @Action(AddAuth)
  addAuth({ getState, setState }: StateContext<AuthStateModel>, { payload }: AddAuth) {
    const state = getState();
    //setState({ items: [...state.items, payload] });
  }
  @Action(GetAuth)
  getAuth({ getState, setState }: StateContext<AuthStateModel>): void {
    const state = getState();
  }
  @Action(DeleteAuth)
  deleteAuth({ getState, setState }: StateContext<AuthStateModel>, { id }: DeleteAuth) {
    const state = getState();
  }
}
