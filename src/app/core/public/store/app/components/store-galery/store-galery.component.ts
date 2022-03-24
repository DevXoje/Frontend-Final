import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GaleryItem } from '@public/store/domain/model';
import { Category } from '@shared/category/domain/category.model';
import { Product } from '@shared/product/domain/product.model';
import { Observable, of } from 'rxjs';
import { GetProducts } from '@shared/product/infrastructure/ngxs/product.actions';
import { ProductState } from '@shared/product/infrastructure/ngxs/product.state';
import { AppComponent } from 'src/app/app.component';
import { CategoryState } from '@shared/category/infrastructure/ngxs/category.state';
import { GetCategories } from '@shared/category/infrastructure/ngxs/category.actions';

@Component({
	selector: 'app-shop-galery',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './store-galery.component.html',
	styleUrls: ['./store-galery.component.scss']
})
export class StoreGaleryComponent implements OnInit, AfterViewInit, OnChanges {
	@Select(ProductState.getProductsList) products$!: Observable<Product[]>;
	@Select(CategoryState.getCategoriesList) categories$!: Observable<Category[]>;
	categories_names$!: Observable<string[]>;

	controls!: NodeListOf<HTMLButtonElement>;

	store: Store;
	activeCategory: string = 'all';

	constructor(
		private route: Router
	) {
		this.store = AppComponent.store;
	}

	ngOnInit() {
		this.store.dispatch(GetProducts);
		this.store.dispatch(GetCategories);
		this.store.select(ProductState.getProductsList);
		this.store.select(CategoryState.getCategoriesList)
			.subscribe(categories => {
				this.categories_names$ = of(categories.map(category => category.name));
				this.filterSelection('all');
			});

	}
	ngAfterViewInit(): void { }
	ngOnChanges(changes: SimpleChanges): void {
		console.log('galery changes', changes);
	}
	show_product(item: Product) {
		this.route.navigate(['/tienda/details', item.id]);
	}
	filterSelection(category: string) {
		this.activeCategory = category;
		const items = document.getElementsByClassName("galery_item");
		category = (category == 'all') ? '' : category;
		for (let i = 0; i < items.length; i++) {
			this.removeClass(items[i], "show");
			if (items[i].className.indexOf(category) > -1) this.addClass(items[i], "show");
		}
	}
	addClass(element: Element, name: string) {
		const classList = element.className.split(" ");
		const classesToAdd = name.split(" ");
		for (let i = 0; i < classesToAdd.length; i++) {
			if (classList.indexOf(classesToAdd[i]) == -1) {
				element.className += " " + classesToAdd[i];
			}
		}
	}
	removeClass(element: Element, name: string) {
		const classList = element.className.split(" ");
		const classesToRemove = name.split(" ");
		for (let i = 0; i < classesToRemove.length; i++) {
			while (classList.indexOf(classesToRemove[i]) > -1) {
				classList.splice(classList.indexOf(classesToRemove[i]), 1);
			}
		}
		element.className = classList.join(" ");
	}

}