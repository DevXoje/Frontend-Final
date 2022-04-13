import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, RegisterComponent } from '../containers';
import { AuthGuard, RoleGuard } from './guards';

const authRoutes: Routes = [
	{
		path: '',
		redirectTo: 'login',
	},
	{
		path: 'login',
		component: LoginComponent,
		//canActivate: [AuthGuard],
	},
	{
		path: 'register',
		component: RegisterComponent,
		//canActivate: [AuthGuard],
	},
	{
		path: 'dashboard',
		//canActivate: [RoleGuard],
		loadChildren: () =>
			import('../../admin/admin.module').then((m) => m.AdminModule),
	},
	{
		path: 'home',
		loadChildren: () =>
			import('../../shop/shop.module').then((m) => m.ShopModule),
	},
	{
		path: 'customer',
		loadChildren: () =>
			import('../../customer/customer.module').then(
				(m) => m.CustomerModule
			),
	},
];

export const AUTH_ROUTES = RouterModule.forChild(authRoutes);
