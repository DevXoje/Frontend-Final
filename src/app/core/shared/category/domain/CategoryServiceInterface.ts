import { Category } from "./category.model";

export interface CategoryServiceInterface {
	getCategories(): Promise<Category[]>;
	getCategory(id: number): Promise<Category>;
	/* createCategory(user: Category): Promise<Category>;
	updateCategory(user: Category): Promise<Category>;
	deleteCategory(id: number): Promise<Category>; */
}
