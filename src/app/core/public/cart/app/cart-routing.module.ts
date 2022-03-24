/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@shared/navigation/domain/models';

//Module
import { CartModule } from './cart.module';

//Containers
import * as cartContainers from './views/containers';
//Guards
//import * as dashboardGuards from './guards';
//Routes
export const ROUTES: Routes = [
	{
		path: '',
		data: {
			title: 'Tienda - SB Admin Angular',
			breadcrumbs: [
				{
					text: 'Carrito',
					active: true,
				},
			],
		} as SBRouteData,
		canActivate: [],
		component: cartContainers.CartComponent,
	},
	{

	},
	/* { path: 'home', component: HomeAdminComponent },
	{ path: 'auth', loadChildren: () => import('../../core/auth/app/list-users/list-users.module').then(m => m.ListUsersModule) },
	{ path: 'products', loadChildren: () => import('../../core/products/app/list-products/list-products.module').then(m => m.ListProductsModule) }, */
];

@NgModule({
	imports: [CartModule, RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
})
export class CartRoutingModule { }
