export interface Product {
	id: number;
	name: string;
	category: Category;
	description: string;
	price: number;
	image: string;
	remenber_token?: string;
	created_at?: string | Date;
	updated_at?: string | Date;
}
export type Category = 'all' | 'cars' | 'animals' | 'fruits' | 'colors';

