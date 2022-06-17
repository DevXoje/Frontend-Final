import {Route} from '@angular/router';
import {ErrorComponent, PrivacyPolicyComponent} from "./app-common/containers";

const appRoutes: Route[] = [
	{
		path: 'shop',
		loadChildren: () =>
			import('./shop/shop.module').then((m) => m.ShopModule),
	},
	{
		path: 'auth',
		loadChildren: () =>
			import('./auth/auth.module').then(m => m.AuthModule),

	},
	{
		path: '',
		loadChildren: () =>
			import('./admin/admin.module').then(m => m.AdminModule),

	},
	/*{
		path: '',
		redirectTo: '/auth/login',//con shop peta
		pathMatch: 'full',
	},*/
	{
		path: 'terms',
		component: PrivacyPolicyComponent
	},
	{
		path: '**',
		component: ErrorComponent,

	}

];

export const APP_ROUTES = appRoutes;
//export const APP_ROUTES = RouterModule.forRoot(appRoutes);
