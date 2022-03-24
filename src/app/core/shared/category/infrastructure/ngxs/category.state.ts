import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Category } from '@shared/category/domain/category.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CategoryService } from '../services';
import { AddCategory, DeleteCategory, GetCategories, SetSelectedCategory, UpdateCategory } from './category.actions';

export class CategoryStateModel {
  public categories: Category[] = [];
  public selectedCategory: Category | null = null;
}

const defaults = {
  categories: [],
  selectedCategory: null,
};

@State<CategoryStateModel>({
  name: 'category',
  defaults
})
@Injectable()
export class CategoryState {
  constructor(private readonly categorieservice: CategoryService) { }
  @Selector()
  public static getCategoriesList({ categories }: CategoryStateModel) {
    return categories;
  }

  @Selector()
  public static getCategoriesCategory({ selectedCategory }: CategoryStateModel) {
    return selectedCategory;
  }
  @Action(GetCategories)
  getCategories({
    getState,
    setState,
  }: StateContext<CategoryStateModel>): Observable<Category[]> {
    return this.categorieservice.getCategoriesObservable().pipe(
      tap((categories: Category[]) => {
        const state = getState();
        setState({ ...state, categories });
        console.log(state);

      })
    );
  }

  @Action(AddCategory)
  addCategory(
    { getState, patchState }: StateContext<CategoryStateModel>,
    { payload }: AddCategory
  ) {
    const state = getState();
    return patchState({
      categories: [...state.categories],
    });
  }

  @Action(UpdateCategory)
  updateCategory(
    { getState, setState }: StateContext<CategoryStateModel>,
    { payload }: UpdateCategory
  ): Observable<Category> {

    return this.categorieservice
      .updateCategory(payload)
      .pipe(
        tap(product => {
          const state = getState();
          const newState = state.categories.map(
            (product) => product.id === product.id ? product : product);
          setState({
            ...state,
            categories: [...newState],
          })
        }
        )
      );

  }

  @Action(DeleteCategory)
  deleteCategory(
    { getState, patchState }: StateContext<CategoryStateModel>,
    { id }: DeleteCategory
  ) {
    return this.categorieservice.deleteCategory(id).pipe(
      tap(() => {
        const state = getState();
        const newState = state.categories.filter((product) => product.id !== id);
        patchState({
          ...state.categories,
          categories: [...newState],
        });
      })
    );
  }

  @Action(SetSelectedCategory)
  setSelectedCategory(
    { getState, setState }: StateContext<CategoryStateModel>,
    { payload }: SetSelectedCategory
  ) {
    const state = getState();
    setState({
      ...state,
      selectedCategory: payload,
    });
  }
}