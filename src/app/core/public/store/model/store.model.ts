import { Category } from "@shared/product/domain/product.model";

export interface Store { }
export type GaleryItem = {
	id: number;
	name: string;
	category: Category;
}
