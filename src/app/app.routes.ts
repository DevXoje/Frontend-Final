import {Route} from '@angular/router';

const appRoutes: Route[] = [
	{
		path: 'shop',
		loadChildren: () =>
			import('./shop/shop.module').then((m) => m.ShopModule),
	}, {
		path: 'auth',
		loadChildren: () =>
			import('./auth/auth.module').then(m => m.AuthModule),

	},
	{
		path: '',
		redirectTo: 'shop',//con shop peta
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: 'shop',
		pathMatch: 'full'
	}

];

export const APP_ROUTES = appRoutes;
//export const APP_ROUTES = RouterModule.forRoot(appRoutes);
