import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NotificationMessage, NotificationType } from '@shared/app-common/domain/notification.message';
import { NotificationService } from '@shared/app-common/infrastructure/services';

@Component({
	selector: 'app-details',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<app-layout-store>
		
		<app-shop-details (addToCart)="addToCart($event)"></app-shop-details>
		<app-shop-other-products></app-shop-other-products>
		
	</app-layout-store>`
})
export class DetailsComponent implements OnInit {
	data: any;
	constructor(private msg: NotificationService) {

	}
	ngOnInit() { }
	addToCart(product: any) {
		const msg: NotificationMessage = {
			type: NotificationType.success,
			message: `${product.name} added to cart`
		}
		this.msg.sendMessage(msg);
		console.log(product);
	}
}
