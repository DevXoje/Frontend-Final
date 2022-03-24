import { Product } from "@shared/product/domain/product.model";
export class GetCart {
  static readonly type = '[Cart] Get';
}
export class GetCartDetails {
  static readonly type = '[Cart] Get Cart Details';
}
export class GetCustomerDetails {
  static readonly type = '[Cart] Get Customer Details';
}
/* export class AddProductToCart { 
  static readonly type = '[Cart] Add Product To Cart';
  constructor(public payload: Product) {}
}
export class RemoveProductFromCart { 
  static readonly type = '[Cart] Remove Product From Cart';
  constructor(public payload: Product) {}
}
export class UpdateCart { 
  static readonly type = '[Cart] Update Cart';
  constructor(public payload: Product) {}
} */


/* export class GetAuth {
  static readonly type = '[Auth] Get';
} */
