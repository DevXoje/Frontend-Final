import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from '@shared/product/domain/product.model';
import { ProductService } from '@shared/product/infrastructure/services';
import { tap } from 'rxjs/operators';
import { AddProduct, DeleteProduct, SetSelectedProduct, UpdateProduct } from './product.actions';

export class ProductStateModel {
  public products: Product[] = [];
  public selectedProduct: Product | null = null;
}

const defaults = {
  products: [],
  selectedProduct: null,
};

@State<ProductStateModel>({
  name: 'product',
  defaults
})
@Injectable()
export class ProductState {
  constructor(private readonly productService: ProductService) { }
  @Selector()
  public static getProductsList({ products }: ProductStateModel) {
    return products;
  }

  @Selector()
  public static getProductsProduct({ selectedProduct }: ProductStateModel) {
    return selectedProduct;
  }

  @Action(AddProduct)
  addProduct(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: AddProduct
  ) {
    return this.productService.addProduct(payload).pipe(
      tap((product) => {
        const state = getState();
        patchState({
          products: [...state.products, product],
        });
      })
    );
  }

  @Action(UpdateProduct)
  updateProduct(
    { getState, setState }: StateContext<ProductStateModel>,
    { payload }: UpdateProduct
  ) {
    return this.productService.updateProduct(payload).pipe(
      tap((product: Product) => {
        const state = getState();
        const newState = state.products.filter((productFiltered) => productFiltered.id !== product.id);
        setState({ ...state, products: [...newState, product] });
      })
    );
  }

  @Action(DeleteProduct)
  deleteProduct(
    { getState, patchState }: StateContext<ProductStateModel>,
    { id }: DeleteProduct
  ) {
    return this.productService.deleteProduct(id).pipe(
      tap(() => {
        const state = getState();
        const newState = state.products.filter((product) => product.id !== id);
        patchState({
          ...state.products,
          products: [...newState],
        });
      })
    );
  }

  @Action(SetSelectedProduct)
  setSelectedProduct(
    { getState, setState }: StateContext<ProductStateModel>,
    { payload }: SetSelectedProduct
  ) {
    const state = getState();
    setState({
      ...state,
      selectedProduct: payload,
    });
  }
}