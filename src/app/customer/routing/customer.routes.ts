import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../containers/profile.component';


const customerRoutes: Routes = [

	{
		path: 'profile',
		component: ProfileComponent,
		//canActivate: [AuthGuard],
	}
];

export const CUSTOMER_ROUTES = RouterModule.forChild(customerRoutes);
