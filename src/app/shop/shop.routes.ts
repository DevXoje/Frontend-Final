import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './containers';
import { HomeComponent } from './containers/home.component';

const shopRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'checkout', component: CheckoutComponent },
];

export const SHOP_ROUTES = RouterModule.forChild(shopRoutes);
