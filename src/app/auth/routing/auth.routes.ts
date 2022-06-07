import {Routes} from '@angular/router';
import {AuthComponent, LoginComponent, RegisterComponent} from "../containers";

const outlet = 'authOutlet';
const authRoutes: Routes = [
	{
		path: 'login',
		component: AuthComponent,

		children: [
			{
				path: '',
				component: LoginComponent,
				outlet
			}
		]
	},
	{
		path: 'register',
		component: AuthComponent,
		children: [
			{
				path: '',
				component: RegisterComponent,
				outlet
			}
		]
	}


];

export const AUTH_ROUTES = authRoutes;
//export const AUTH_ROUTES = RouterModule.forChild(authRoutes);
