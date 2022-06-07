import {HttpClient,} from '@angular/common/http';
import {HttpGenericAdapter,} from 'src/app/app-common/services/HttpGenericAdapter';

import {Product, ProductServiceInterface} from '../domain/product.model';

export class HttpProductAdapter
	extends HttpGenericAdapter<Product>
	implements ProductServiceInterface {
	constructor(http: HttpClient, productUrl: string) {
		super(http, productUrl);
	}


}
