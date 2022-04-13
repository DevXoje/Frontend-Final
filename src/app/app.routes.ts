import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
	{ path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
	// { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
