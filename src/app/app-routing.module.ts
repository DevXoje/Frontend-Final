import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, AuthRoleGuard, } from '@shared/auth/app/guards';

/* export const routes: Routes = [
	{ path: '**', redirectTo: 'secure' },
	{
		path: 'public',
		loadChildren: () =>
			import('./public/public-routing.module')
				.then(m => m.PublicRoutingModule)
	},
	{
		path: 'secure',
		loadChildren: () =>
			import('./secure/secure-routing.module')
				.then(m => m.SecureRoutingModule)
		//loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule)
	}
];
 */

const routes: Routes = [
	/* {
		path: '',
		pathMatch: 'full',
		redirectTo: '/dashboard',
	}, */
	{
		path: '',
		loadChildren: () =>
			import('@public/public-routing.module').then(m => m.PublicRoutingModule),

	},
	{
		path: 'dashboard',
		loadChildren: () =>
			import('@secure/dashboard/dashboard-routing.module').then(
				m => m.DashboardRoutingModule
			),
		canActivate: [AuthGuard],
		data: {
			expectedRole: 'admin'
		}
	},
	{
		path: '**',
		pathMatch: 'full',
		loadChildren: () =>
			import('@shared/error/app/error-routing.module').then(m => m.ErrorRoutingModule),
	},
	/*
		  {
			path: 'charts',
			loadChildren: () =>
				import('@secure/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
		},
		{
			path: 'error',
			loadChildren: () =>
				import('@shared/error/app/error-routing.module').then(m => m.ErrorRoutingModule),
		},
		{
			path: 'tables',
			loadChildren: () =>
				import('@shared/tables/app/tables-routing.module').then(m => m.TablesRoutingModule),
		},
		{
			path: 'version',
			loadChildren: () =>
				import('@secure/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
		}, 
	*/

];
@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
