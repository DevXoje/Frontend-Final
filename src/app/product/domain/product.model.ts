import {HttpGenericService,} from 'src/app/app-common/services/HttpGenericAdapter';

export type Product = {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	category_id: number;
	created_at: string;
	updated_at: string;
	updated_ago?: string;
	stock: number;
	disabled?: boolean;
};
export type ProductSearch =
	| 'name'
	| 'description'
	| 'price'
	| 'stock'
	| 'category_id'
	| 'created_at'
	| 'updated_at';

//type algo=keyof Product ;

export type ProductStateModel = {
	products: Product[];
	selectedProduct: Product | null;
};

export type ProductServiceInterface = HttpGenericService<Product> & {
	//create(user: RegisterData): Promise<CreateResponse<Auth>>;
};
