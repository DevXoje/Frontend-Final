import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from '@angular/common/http';
import {
	HttpResponse,
	HttpGenericAdapter,
} from 'src/app/app-common/services/HttpGenericAdapter';

import { Product, ProductServiceInterface } from '../domain/product.model';

export class HttpProductAdapter
	extends HttpGenericAdapter<Product>
	implements ProductServiceInterface
{
	constructor(http: HttpClient, authUrl: string) {
		super(http, authUrl);
	}
}
