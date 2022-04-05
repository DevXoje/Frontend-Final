/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@shared/navigation/domain/models';

//Module
import { StoreModule } from '../store.module';

//Containers
import * as storeContainers from '../views/containers';
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
					text: 'Dashboard',
					active: true,
				},
			],
		} as SBRouteData,
		canActivate: [],
		component: storeContainers.ShopComponent,
	},
	{
		path: 'details/:id',
		data: {
			title: 'Detalles - SB Admin Angular',
			breadcrumbs: [
				{
					text: 'Dashboard',
					active: true,
				},
			],
		} as SBRouteData,
		canActivate: [],
		component: storeContainers.DetailsComponent,
	},
	{
		path: 'cart',
		loadChildren: () => import('../../../cart/app/cart-routing.module').then(m => m.CartRoutingModule),
	}
	/* { path: 'home', component: HomeAdminComponent },
	{ path: 'auth', loadChildren: () => import('../../core/auth/app/list-users/list-users.module').then(m => m.ListUsersModule) },
	{ path: 'products', loadChildren: () => import('../../core/products/app/list-products/list-products.module').then(m => m.ListProductsModule) }, */
];

@NgModule({
	imports: [StoreModule, RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
})
export class StoreRoutingModule { }