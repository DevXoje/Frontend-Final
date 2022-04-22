import { RouterModule, Routes } from '@angular/router';
import { CustomerProfileComponent } from '../containers/profile.component';


const customerRoutes: Routes = [

	{
		path: 'profile',
		component: CustomerProfileComponent,
		//canActivate: [AuthGuard],
	}
];

export const CUSTOMER_ROUTES = RouterModule.forChild(customerRoutes);
