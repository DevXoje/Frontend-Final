import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Breadcrumb } from '../../../domain/models';
import { NavigationService } from '../../../infrastructure/services';

@Component({
	selector: 'app-cart-info',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<div class="d-flex justify-content-around">
		<a href="">
			<fa-icon [icon]="heartIcon"></fa-icon>
			<sup>{{num_whised}}</sup>
		</a>
		<a href="">
			<fa-icon [icon]="bagIcon"></fa-icon>
			<sup>{{num_added}}</sup>
		</a>
		<span>total {{total_added|currency}}</span>
	</div>
	`
})
export class CartInfoComponent implements OnInit, OnDestroy {
	heartIcon = faHeart;
	bagIcon = faShoppingBag;
	num_whised = 0;
	num_added = 0;
	total_added = 0;
	constructor() { }
	ngOnInit() {

	}

	ngOnDestroy() {
	}
}
