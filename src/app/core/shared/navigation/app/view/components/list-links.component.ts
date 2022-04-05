import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Link } from '../../../domain/models';

@Component({
	selector: 'app-list-links',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<ul class="list-group justify-content-around" [ngClass]="{'flex-row': vertical}">
		<li class="list-group-item list-group-item-dark" *ngFor="let link of listLinks"><a [href]="link.path">{{link.text}}</a></li>
	</ul>
	`
})
export class ListLinksComponent implements OnInit, OnDestroy {
	@Input() vertical: boolean = false;
	listLinks: Link[] = [
		{ text: "Home", path: "/login" },
		{ text: "Shop", path: "/tienda" },
		{ text: "Contact", path: "/contact" },
	];
	constructor() { }
	ngOnInit() {

	}

	ngOnDestroy() {
	}
}
