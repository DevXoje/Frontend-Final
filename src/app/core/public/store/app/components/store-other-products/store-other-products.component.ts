import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-store-other-products',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<div class="grid related-products">
	<div class="column-xs-12">
		<h3>You may also like</h3>
	</div>
	<div class="column-xs-12 column-md-4" *ngFor="let item of items">
		<img [src]="item.image">
		<h4>{{item.name|titlecase}}</h4>
		<p class="price">{{item.price}}</p>
	</div>
</div>
	`
})
export class StoreOtherProductsComponent implements OnInit {
	items: any[] = [
		{
		image: "https://source.unsplash.com/6Rs76hNbIWE",
		name: "Succulent",
		price: 19.99
		},
		{
			image: "https://source.unsplash.com/2y6s0qKdGZg",
		name: "Succulent",
		price: 19.99
		},
		{
			image: "https://source.unsplash.com/miziNqvJx5M",
		name: "Succulent",
		price: 19.99
		},
	];
	constructor() {
	}
	ngOnInit() { }

}
