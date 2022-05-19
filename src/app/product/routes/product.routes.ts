import {ProductResolver} from "./resolver/product.resolver";
import {RouterModule, Routes} from "@angular/router";
import {CreateProductComponent, EditProductComponent} from "../containers";

const productRoutes: Routes = [
	{
		path: 'edit/:id',
		component: EditProductComponent,
		resolve: {
			productResp: ProductResolver,
		},
	}, {
		path: 'create',
		component: CreateProductComponent
		,
	},
];

export const PRODUCT_ROUTES = RouterModule.forChild(productRoutes);
