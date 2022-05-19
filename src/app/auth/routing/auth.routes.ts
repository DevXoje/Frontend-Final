import {RouterModule, Routes} from '@angular/router';
import {EditComponent, LoginComponent, RegisterComponent} from '../containers';
import {CustomerResolver} from '../../customer/routing/resolvers/customer.resolver';
import {CustomerCheckoutComponent} from "../../customer/containers";

const authRoutes: Routes = [

	{
		path: 'login',
		component: LoginComponent,

	},
	{
		path: 'register',
		component: RegisterComponent,
	},

	{
		path: 'customer',
		loadChildren: () =>
			import('../../customer/customer.module').then(
				(m) => m.CustomerModule
			),
	},
	{
		path: 'edit/:id', component: EditComponent,
		resolve: {
			customerResp: CustomerResolver
		}
	},
	{
		path: 'checkout',
		component: CustomerCheckoutComponent
	}
];

export const AUTH_ROUTES = RouterModule.forChild(authRoutes);
