import {Routes} from '@angular/router';
import {AdminComponent, AdminResumeComponent} from "../containers";

const outlet = 'adminOutlet';
const adminRoutes: Routes = [
	{
		path: 'home',
		component: AdminComponent,
		children: [
			{
				path: '',
				component: AdminResumeComponent,
				outlet
			}
		]
	},
	{
		path: '',
		component: AdminComponent,
		canLoad: [],
		children: [
			{
				path: 'products',
				loadChildren: () =>
					import('../../product/product.module').then((m) => m.ProductModule),
			}
		]
	}


];

//export const ADMIN_ROUTES = RouterModule.forChild(adminRoutes);
export const ADMIN_ROUTES = adminRoutes;
