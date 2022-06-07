import {CartCheckoutComponent} from './cart-checkout.component';
import {CartNavComponent} from './cart-nav.component';
import {PaymentComponent} from './payment.component';
import {StripeCheckoutComponent} from './stripe-checkout.component';
import {GalleryOrdersComponent} from "./gallery-orders.component";
import {TableOrdersComponent} from "./table-orders.component";
import {ShowOrderComponent} from "./show-order.component";

export const components = [
	CartNavComponent,
	CartCheckoutComponent,
	StripeCheckoutComponent,
	PaymentComponent,
	GalleryOrdersComponent,
	TableOrdersComponent, ShowOrderComponent
];

export * from './cart-nav.component';
export * from './cart-checkout.component';
export * from './stripe-checkout.component';
export * from './payment.component';
export * from './gallery-orders.component';
