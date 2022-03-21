import { Category } from "@shared/category/domain/category.model";

export interface Store { }
export type GaleryItem = {
	id: number;
	name: string;
	category: Category;
}
