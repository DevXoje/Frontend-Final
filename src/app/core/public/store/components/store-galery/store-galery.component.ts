import { AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GaleryItem } from '@public/store/model';
import { Category } from '@shared/product/domain/product.model';
import { ProductService } from '@shared/product/infrastructure/services';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-store-galery',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './store-galery.component.html',
	styleUrls: ['./store-galery.component.scss']
})
export class StoreGaleryComponent implements OnInit, AfterViewInit, OnChanges {

	controls!: NodeListOf<HTMLButtonElement>;

	categories: Category[] = [];
	items: Observable<any[]>; /* = [
		{
			id: 1,
			name: 'BMW',
			category: 'cars',
		},
		{
			id: 2,
			name: 'Google',
			category: 'animals',
		}
		,
		{
			id: 3,
			name: 'Google',
			category: 'fruits',
		}
		,
		{
			id: 4,
			name: 'Blue',
			category: 'colors',
		}
	]; */
	activeCategory: string = 'all';
	constructor(
		private productService: ProductService,
		private route: Router
	) {
		this.categories = ['all', 'cars', 'animals', 'fruits', 'colors'];
		//this.categories=this.productService.getCategories();
		this.items = this.productService.getProductsObservable();
		console.log(this.items);



	}
	handleBye(item: any) {
		var altura = this.getVal(this.gallery, 'grid-auto-rows');
		var gap = this.getVal(this.gallery, 'grid-row-gap');
		var gitem = item.parentElement.parentElement;
		gitem.style.gridRowEnd = "span " + Math.ceil((this.getHeight(gitem) + gap) / (altura + gap));
		item.classList.remove('byebye');
		return null;
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);

	}
	ngOnInit() {
	}
	ngAfterViewInit(): void {
		this.filterSelection("all");
		//Experiment
		/* this.gallery = document.querySelector('#gallery') as HTMLElement;
		this.gallery_items = this.gallery.querySelectorAll('img') as NodeListOf<HTMLElement>;
		this.gallery_items.forEach((item) => {
			item.classList.add('byebye');
			//if (item.complete) {				console.log(item.src);			}
			if (false) { }
			else {
				item.onload = this.handleBye(item);
			}

		});
		window.addEventListener('resize', this.resizeAll);
		this.gallery.querySelectorAll('.gallery-item').forEach(function (item) {
			item.addEventListener('click', function () {
				item.classList.toggle('full');
			});
		}); */
	}

	show_item(item: GaleryItem) {
		console.log(item);
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
		const arr1 = element.className.split(" ");
		const arr2 = name.split(" ");
		for (let i = 0; i < arr2.length; i++) {
			if (arr1.indexOf(arr2[i]) == -1) {
				element.className += " " + arr2[i];
			}
		}
	}
	removeClass(element: Element, name: string) {
		const arr1 = element.className.split(" ");
		const arr2 = name.split(" ");
		for (let i = 0; i < arr2.length; i++) {
			while (arr1.indexOf(arr2[i]) > -1) {
				arr1.splice(arr1.indexOf(arr2[i]), 1);
			}
		}
		element.className = arr1.join(" ");
	}
	//Experiment
	gallery!: HTMLElement;
	gallery_items!: NodeListOf<HTMLElement>;
	getVal(elem: HTMLElement, style: any) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); }
	getHeight(item: HTMLElement) {
		const content = item.querySelector('.content') as HTMLElement;
		return content.getBoundingClientRect().height;
	};
	resizeAll() {
		var altura = this.getVal(this.gallery, 'grid-auto-rows');
		var gap = this.getVal(this.gallery, 'grid-row-gap');
		var items = this.gallery.querySelectorAll('.gallery-item') as NodeListOf<HTMLElement>;
		items.forEach((item) => {
			var el = item;
			el.style.gridRowEnd = "span " + Math.ceil((this.getHeight(item) + gap) / (altura + gap));
		});
	};



	/* gallery_items.forEach((item) => {
	item.classList.add('byebye');
	if (item.complete) {
		console.log(item.src);
	}
	else {
		item.onload = () => {
			var altura = getVal(gallery, 'grid-auto-rows');
			var gap = getVal(gallery, 'grid-row-gap');
			var gitem = item.parentElement.parentElement;
			gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
			item.classList.remove('byebye');
		}); */
}

/* 
var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
	var altura = getVal(gallery, 'grid-auto-rows');
	var gap = getVal(gallery, 'grid-row-gap');
	gallery.querySelectorAll('.gallery-item').forEach(function (item) {
		var el = item;
		el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
	});
};
gallery.querySelectorAll('img').forEach(function (item) {
	item.classList.add('byebye');
	if (item.complete) {
		console.log(item.src);
	}
	else {
		item.addEventListener('load', function () {
			var altura = getVal(gallery, 'grid-auto-rows');
			var gap = getVal(gallery, 'grid-row-gap');
			var gitem = item.parentElement.parentElement;
			gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
			item.classList.remove('byebye');
		});
	}
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
	item.addEventListener('click', function () {        
		item.classList.toggle('full');        
	});
});
 */