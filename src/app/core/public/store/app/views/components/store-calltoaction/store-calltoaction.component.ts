import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shop-calltoaction',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './store-calltoaction.component.html',
})
export class StoreCallToActionComponent implements OnInit {


	constructor() {
	}
	ngOnInit() { }

}