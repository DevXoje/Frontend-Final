import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { CartStateModel } from '@public/cart/domain/cart.model';
import { CartService } from '../services';
import { GetCustomerDetails } from './cart.actions';
import { Customer } from '@shared/tables/domain/models';

const defaults: CartStateModel = {};
@State<CartStateModel>({
  name: 'cart',
  //defaults
})
@Injectable()
export class CartState {

  @Selector()
  static cartDetails(cart: CartStateModel) {
    return cart.cart;
  }

  @Selector()
  static userDetails(cart: CartStateModel) {
    return cart.cart?.customer;
  }
  /* @Selector()
  static refreshToken(state: CartStateModel) {
    return state.refreshToken;
  } */

  constructor(private cartService: CartService) { }

  @Action(GetCustomerDetails) getCustomerDetails(
    { patchState }: StateContext<CartStateModel>,
    customerData: Customer
  ) {
    return this.cartService.getCart(4).pipe(
      tap(result => {
        patchState({
          cart: result,
        });
      })
    );
  }


  /* @Action(GetAuth)
  getAuth(
    { patchState }: StateContext<CartStateModel>,
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