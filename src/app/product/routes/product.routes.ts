import {ProductResolver} from "./resolver";
import {RouterModule, Routes} from "@angular/router";
import {CreateProductComponent, EditProductComponent} from "../containers";
import {RoleGuard} from "../../auth/routing/guards";
import {TableProductsComponent} from "../components";

const productRoutes: Routes = [

	{
		path: 'edit/:id',
		component: EditProductComponent,
		resolve: {
			productResp: ProductResolver,
		},
		canActivate: [RoleGuard],
	},
	{
		path: 'create',
		component: CreateProductComponent,
		canActivate: [RoleGuard],
	},
	{
		path: 'table',
		component: TableProductsComponent,

	},
	{
		path: '',
		redirectTo: 'table',
		pathMatch: 'full'
	}
];

export const PRODUCT_ROUTES = RouterModule.forChild(productRoutes);
