import { Route } from '@angular/router';

export interface Category {
	id: number;
	name: string;
	link: Route;
	image: string;

}

export interface CategoryMethods {
	getCategories(): Promise<Category[]>
}

