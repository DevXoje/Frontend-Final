import {RouterModule, Routes} from '@angular/router';
import {ServerErrorComponent} from "./app-common/containers";

const appRoutes: Routes = [
	{path: 'error', component: ServerErrorComponent},
	{
		path: 'auth',
		loadChildren: () =>
			import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./admin/admin.module').then((m) => m.AdminModule),
	},

	{
		path: '**',
		loadChildren: () =>
			import('./shop/shop.module').then((m) => m.ShopModule),
	},
	/*{path: '**', component: NopagefoundComponent},
	*/

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
