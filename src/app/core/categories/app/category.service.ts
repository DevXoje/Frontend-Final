import { Injectable } from '@angular/core';
import { Category, CategoryMethods } from '../domain/category';
import { categories } from '../infrastructure/category-adapter';

@Injectable({
	providedIn: 'root'
})
export class CategoryService implements CategoryMethods {
	private categories: Category[] = [];
	constructor() {
		this.categories = categories;
	}

	async getCategories() {
		return Promise.resolve(this.categories);
	}
}

