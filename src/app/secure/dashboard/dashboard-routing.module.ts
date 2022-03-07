/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '../navigation/models';

//Module
import { DashboardModule } from './dashboard.module';

//Containers
import * as dashboardContainers from './containers';

//Guards
import * as dashboardGuards from './guards';
import { HomeAdminComponent } from '../home-admin/home-admin.component';

//Routes
export const ROUTES: Routes = [
	{
		path: '',
		data: {
			title: 'Dashboard - SB Admin Angular',
			breadcrumbs: [
				{
					text: 'Dashboard',
					active: true,
				},
			],
		} as SBRouteData,
		canActivate: [],
		component: dashboardContainers.DashboardComponent,
	},
	{
		path: 'static',
		data: {
			title: 'Dashboard Static - SB Admin Angular',
			breadcrumbs: [
				{
					text: 'Dashboard',
					link: '/dashboard',
				},
				{
					text: 'Static',
					active: true,
				},
			],
		} as SBRouteData,
		canActivate: [],
		component: dashboardContainers.StaticComponent,
	},
	{
		path: 'light',
		data: {
			title: 'Dashboard Light - SB Admin Angular',
			breadcrumbs: [
				{
					text: 'Dashboard',
					link: '/dashboard',
				},
				{
					text: 'Light',
					active: true,
				},
			],
		} as SBRouteData,
		canActivate: [],
		component: dashboardContainers.LightComponent,
	},
	{ path: 'home', component: HomeAdminComponent },
	{ path: 'auth', loadChildren: () => import('../../core/auth/app/list-users/list-users.module').then(m => m.ListUsersModule) },
	{ path: 'products', loadChildren: () => import('../../core/products/app/list-products/list-products.module').then(m => m.ListProductsModule) },
];

@NgModule({
	imports: [DashboardModule, RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
})
export class DashboardRoutingModule { }
