import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SBRouteData, SideNavItem } from '../../domain/models';

@Component({
	selector: 'app-side-nav-item',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<a class="nav-link"
	[routerLink]="sideNavItem.link"
	(click)="expanded = !expanded"
	[ngClass]="{active: isActive, collapsed: !expanded}">
		<div class="sb-nav-link-icon" *ngIf="sideNavItem.icon">
			<fa-icon [icon]='sideNavItem.icon'></fa-icon>
		</div>
    	{{sideNavItem.text}}
		<div class="sb-sidenav-collapse-arrow">
			<fa-icon class="ml-auto" *ngIf="sideNavItem.submenu" [icon]="['fas', 'angle-down']"></fa-icon>
		</div>
	</a>
	<nav class="sb-sidenav-menu-nested nav" *ngIf="sideNavItem.submenu &amp;&amp; expanded">
		<app-side-nav-item
			class="submenu"
			*ngFor="let submenuItem of sideNavItem.submenu"
			[sideNavItem]="submenuItem"></app-side-nav-item>
	</nav>`
})
export class SideNavItemComponent implements OnInit {
	@Input() sideNavItem!: SideNavItem;
	@Input() isActive!: boolean;

	expanded = false;
	routeData!: SBRouteData;

	constructor() { }
	ngOnInit() { }
}
