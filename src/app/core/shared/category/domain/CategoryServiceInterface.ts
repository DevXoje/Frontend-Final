import { Category } from "./category.model";

export interface CategoryServiceInterface {
	deleteCategory(id: number): any;
	getCategory(id: number): Promise<Category>;
	getCategories(): Promise<Category[]>;
	createCategory(user: Category): Promise<Category>;
	updateCategory(user: Category): Promise<Category>;
	deleteCategory(id: number): Promise<Category>;
}
