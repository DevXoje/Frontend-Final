
export interface Product {
	id: number;
	name: string;
	category?: string;
	description: string;
	price: number;
	image: string;
	remenber_token?: string;
	created_at?: string | Date;
	updated_at?: string | Date;
}

