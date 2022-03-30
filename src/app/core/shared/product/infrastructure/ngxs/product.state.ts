import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from '@shared/product/domain/product.model';
import { ProductService } from '@shared/product/infrastructure/services';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AddProduct, DeleteProduct, GetProducts, SetSelectedProduct, UpdateProduct } from './product.actions';

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
  @Selector()
  public static getProductsList({ products }: ProductStateModel) {
    return products;
  }

  @Selector()
  public static getProductsProduct({ selectedProduct }: ProductStateModel) {
    return selectedProduct;
  }

  constructor(private readonly productService: ProductService) { }

  @Action(GetProducts)
  getProducts({
    getState,
    setState,
  }: StateContext<ProductStateModel>): Observable<Product[]> {
    return this.productService.getProductsObservable().pipe(
      tap((products: Product[]) => {
        const state = getState();
        setState({ ...state, products });
      })
    );
  }

  @Action(AddProduct)
  addProduct(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: AddProduct
  ) {
    const state = getState();
    return patchState({
      products: [...state.products],
    });
  }

  @Action(UpdateProduct)
  updateProduct(
    { getState, setState }: StateContext<ProductStateModel>,
    { payload }: UpdateProduct
  ): Observable<Product> {

    return this.productService
      .updateProduct(payload)
      .pipe(
        tap(product => {
          const state = getState();
          const newState = state.products.map(
            (product) => product.id === product.id ? product : product);
          setState({
            ...state,
            products: [...newState],
          })
        }
        )
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