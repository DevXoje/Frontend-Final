import { Route } from "@angular/compiler/src/core"

export interface Category {
	id: number;
	name: string;
	link: Route;
	
}

export interface CategoryMethods {
	getCategories(): Promise<Category[]>
}

