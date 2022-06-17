import {Routes} from '@angular/router';
import {CancelComponent, CheckoutComponent, ShopComponent, ShopResumeComponent, SuccessComponent} from "../containers";
import {ErrorComponent} from "../../app-common/containers";

const outlet = 'shopOutlet';
const shopRoutes: Routes = [
	{
		path: 'home',
		component: ShopComponent,
		children: [
			{
				path: '',
				component: ShopResumeComponent,
				outlet
			},
		]
	},
	{
		path: 'checkout',
		component: ShopComponent,
		children: [
			{
				path: '',
				component: CheckoutComponent,
				outlet
			},
			{
				path: 'success',
				component: SuccessComponent,
				outlet
			},
			{
				path: 'cancel',
				component: CancelComponent,
				outlet
			}
		]
	},
	{
		path: 'customer',
		loadChildren: () =>
			import('../../customer/customer.module').then((m) => m.CustomerModule),
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: ErrorComponent
	}
	/*children: [
			{
				path: 'products',
				loadChildren: () =>
					import('../../product/product.module').then((m) => m.ProductModule),
			},
			{
				path: 'checkout',
				//resolve: {client_secret: StripeIntentResolver,},
				children: [
					{
						path: '',
						component: CheckoutComponent,
						pathMatch: 'full',

					},
					{
						path: 'success',
						component: SuccessComponent,
						pathMatch: 'full',
					},
					{
						path: 'cancel',
						component: CancelComponent,
						pathMatch: 'full',
					}
				]
			},
		]*/
];

//export const SHOP_ROUTES = RouterModule.forChild(shopRoutes);
export const SHOP_ROUTES = shopRoutes;
