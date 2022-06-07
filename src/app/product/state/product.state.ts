import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {HttpResponse} from 'src/app/app-common/services/HttpGenericAdapter';
import {Product, ProductStateModel} from '../domain/product.model';
import {ProductService} from '../services/product.service';
import {CreateProduct, DeleteProduct, GetAllProducts, SetSelectedProduct} from './product.actions';
import {HttpErrorResponse} from "@angular/common/http";

const defaults: ProductStateModel = {
	products: [],
	selectedProduct: {} as Product,
};

@State<ProductStateModel>({
	name: 'product',
	defaults,
})
@Injectable()
export class ProductState {
	constructor(private readonly productService: ProductService) {
	}

	@Selector()
	public static getProductList({products}: ProductStateModel): Product[] {
		return products;
	}

	@Selector()
	public static getSelectedProduct({selectedProduct}: ProductStateModel) {
		return selectedProduct;
	}

	@Action(CreateProduct)
	public createProduct({
							 getState,
							 patchState,
						 }: StateContext<ProductStateModel>, toCreateProduct: CreateProduct): Observable<HttpResponse<Product>> {
		return this.productService.create(toCreateProduct.product).pipe(
			tap((response: HttpResponse<Product>) => {
				console.log(response);
				/*const state = getState();
				patchState({
					products: [...state.products, response.data],
					selectedProduct: response.data,
				});*/
			}),
			catchError((err: HttpErrorResponse) => {
				return throwError(() => new Error("CreateProducts Falla=> " + err.message));
			})
		);
	}

	@Action(DeleteProduct)
	public deleteProduct({
							 getState,
							 patchState,
						 }: StateContext<ProductStateModel>, toCreateProduct: DeleteProduct): Observable<HttpResponse<Product>> {
		return this.productService.delete(toCreateProduct.id).pipe(
			tap((response: HttpResponse<Product>) => {
				console.log(response);
				patchState({
					products: [...(getState().products).filter(product => product.id !== toCreateProduct.id)],
					selectedProduct: null,
				});
			}),
			catchError((err: HttpErrorResponse) => {
				return throwError(() => new Error("CreateProducts Falla=> " + err.message));
			})
		);
	}

	@Action(GetAllProducts)
	getAll({
			   getState,
			   patchState,
		   }: StateContext<ProductStateModel>): Observable<HttpResponse<Product[]>> {
		return this.productService.getAll().pipe(
			tap((resp: HttpResponse<Product[]>) => {
					console.log(resp);
					patchState({
						products: [...resp.data],
						selectedProduct: getState().selectedProduct,
					})
				}
			),
			catchError((err: HttpErrorResponse) => {
				return throwError(() => new Error("GetAllProducts Falla=> " + err.message));
			})
		);
	}

	/* @Action(GetSortedProducts)
	getSortedAll(
		{ getState, patchState }: StateContext<ProductStateModel>,
		order: ProductSearch
	): Observable<Product[]> {
		return this.productService.ordenBy(order).pipe(
			tap((products: Product[]) => {
				const state = getState();
				patchState({
					products: [...products],
					selectedProduct: state.selectedProduct,
				});
			})
		);
	} */
	@Action(SetSelectedProduct)
	public setSelectedProduct(
		{getState, patchState}: StateContext<ProductStateModel>,
		toStoreProduct: SetSelectedProduct
	): Observable<HttpResponse<Product>> {
		return this.productService.getById(toStoreProduct.id).pipe(
			tap((resp: HttpResponse<Product>) => {
				patchState({
					products: [...getState().products],
					selectedProduct: resp.data,
				});
			})
		);
	}

	/* 	@Action(SetSelectedProductToUpdate)
	public setSelectedProductToUpdate(
		{ getState, patchState }: StateContext<ProductStateModel>,
		toStoreProduct: SetSelectedProductToUpdate
	): Observable<Product> {
		const state = getState();
		toStoreProduct.product.id = state.selectedProduct.id;
		return this.productService.updateProduct(toStoreProduct.product).pipe(
			tap((product: Product) => {
				patchState({
					products: [...state.products],
					selectedProduct: product,
				});
			})
		);
	} */
}
