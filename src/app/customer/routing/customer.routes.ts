import {RouterModule, Routes} from '@angular/router';
import {CustomerCompleteComponent, CustomerProfileComponent} from '../containers';


const customerRoutes: Routes = [
	{
		path: 'profile',
		component: CustomerProfileComponent,
		//canActivate: [AuthGuard],
	},
	{
		path: 'complete',
		component: CustomerCompleteComponent,
		/*resolve: {
			customerResp: CustomerResolver
		},*/
	}
];

export const CUSTOMER_ROUTES = RouterModule.forChild(customerRoutes);
