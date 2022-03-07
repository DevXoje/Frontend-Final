import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-view-details',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<div class="card text-white mb-4" [ngClass]="background">
		<ng-content select=".card-body"></ng-content>
		<div class="card-footer d-flex align-items-center justify-content-between">
			<a class="small text-white stretched-link" [routerLink]="link">View Details</a>
			<div class="small text-white"><fa-icon [icon]='["fas", "angle-right"]'></fa-icon></div>
		</div>
	</div>`
})
export class CardViewDetailsComponent implements OnInit {
	@Input() background!: string;
	@Input() color!: string;
	@Input() link = '';

	customClasses: string[] = [];

	constructor() { }
	ngOnInit() {
		if (this.background) {
			this.customClasses.push(this.background);
		}
		if (this.color) {
			this.customClasses.push(this.color);
		}
	}
}
