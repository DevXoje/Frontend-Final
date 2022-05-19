import { CartCheckoutComponent } from './cart-checkout.component';
import { CartNavComponent } from './cart-nav.component';
import { PaymentComponent } from './payment.component';
import { StripeCheckoutComponent } from './stripe-checkout.component';
import {GalleryOrdersComponent} from "./gallery-orders.component";

export const components = [
	CartNavComponent,
	CartCheckoutComponent,
	StripeCheckoutComponent,
	PaymentComponent,
	GalleryOrdersComponent
];

export * from './cart-nav.component';
export * from './cart-checkout.component';
export * from './stripe-checkout.component';
export * from './payment.component';
