import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent, HomeComponent } from '../containers';
import { StripeIntentResolver } from './resolvers/stripe-intent.resolver';

const shopRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'checkout',
		component: CheckoutComponent,
		resolve: {
			client_secret: StripeIntentResolver,
		},
	},
];

export const SHOP_ROUTES = RouterModule.forChild(shopRoutes);
