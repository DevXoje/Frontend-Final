import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GaleryItem } from '@public/store/domain/model';
import { Category } from '@shared/category/domain/category.model';
import { Product } from '@shared/product/domain/product.model';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'app-store-galery',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './store-galery.component.html',
	styleUrls: ['./store-galery.component.scss']
})
export class StoreGaleryComponent implements OnInit, AfterViewInit, OnChanges {

	controls!: NodeListOf<HTMLButtonElement>;

	@Input() categories_names: string[] = [];
	@Input() products: Product[] | null = [];
	activeCategory: string = 'all';
	constructor(
		private route: Router
	) {
		//this.categories = ['all', 'cars', 'animals', 'fruits', 'colors'];

	}

	ngOnInit() { }
	ngAfterViewInit(): void { }
	ngOnChanges(changes: SimpleChanges): void {
		console.log('galery changes', changes);
		const isValid = this.products && this.products.length > 0 &&
			this.categories_names && this.categories_names.length > 0;
		if (isValid) {
			/* this.products = changes.products.currentValue; */
			this.filterSelection("all");
			
		}
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





	//Experiment
	/* gallery!: HTMLElement;
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
 */


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