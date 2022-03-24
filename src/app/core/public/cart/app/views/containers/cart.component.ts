import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: 'app-cart',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<app-layout-store>
		<app-customer-info></app-customer-info>
		<app-cart-info></app-cart-info>
	</app-layout-store>`
})
export class CartComponent /* implements OnInit, AfterViewInit */ { }