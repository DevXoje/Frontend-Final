import { Product } from "@shared/product/domain/product.model";

export class AddProduct {
  static readonly type = '[Product] Add';
  constructor(public payload: Product) { }
}
export class GetProduct {
  static readonly type = '[Product] Get';
  constructor(public payload: Product) { }
}
export class UpdateProduct {
  static readonly type = '[Product] Update';
  constructor(public payload: Product) { }
}
export class DeleteProduct {
  static readonly type = '[Product] Delete';
  constructor(public id: number) { }
}
export class SetSelectedProduct {
  static readonly type = '[Product] Set';
  constructor(public payload: Product) { }
}
