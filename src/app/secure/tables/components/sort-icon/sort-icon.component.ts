import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-sort-icon',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<ng-container *ngIf='direction === "asc"'><fa-icon class="sort-icon" [icon]='["fas", "chevron-up"]'></fa-icon></ng-container><ng-container *ngIf='direction === "desc"'><fa-icon class="sort-icon" [icon]='["fas", "chevron-down"]'></fa-icon></ng-container>
	`,
	styles: ['.sort-icon { height: 0.9rem;width: 0.9rem;margin-left: 0.25rem;margin-top: -0.125rem;vertical-align: middle;}']
})
export class SortIconComponent implements OnInit {
	@Input() direction!: string;

	constructor() { }
	ngOnInit() { }
}
