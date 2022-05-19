import {
	HttpGenericService,
	HttpResponse,
} from 'src/app/app-common/services/HttpGenericAdapter';

export type Product = {
	id: number;
	name: string;
	description: string;
	price: number;
	quantity: number;
	image: string;
	category_id: number;
	created_at: string;
	updated_at: string;
	stock: number;
	disabled?: boolean;
};
export type ProductSearch =
	| 'name'
	| 'description'
	| 'price'
	| 'quantity'
	| 'category_id'
	| 'created_at'
	| 'updated_at';

//type algo=keyof Product ;

export type ProductStateModel = {
	products: Product[];
	selectedProduct: Product;
};

export type ProductServiceInterface = HttpGenericService<Product> & {
	//create(user: RegisterData): Promise<CreateResponse<Auth>>;
};
