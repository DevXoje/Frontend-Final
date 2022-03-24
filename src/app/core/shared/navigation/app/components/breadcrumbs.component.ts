import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Breadcrumb } from '../../domain/models';
import { NavigationService } from '../../infrastructure/services';

@Component({
	selector: 'app-breadcrumbs',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<ol class="breadcrumb mb-4">
		<li class="breadcrumb-item" *ngFor="let breadcrumb of breadcrumbs" [ngClass]="{active: breadcrumb.active}"><a *ngIf="breadcrumb.link" [routerLink]="breadcrumb.link">{{breadcrumb.text}}</a><span *ngIf="!breadcrumb.link">{{breadcrumb.text}}</span></li>
	</ol>`
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
	subscription: Subscription = new Subscription();
	breadcrumbs!: Breadcrumb[];

	constructor(public navigationService: NavigationService) { }
	ngOnInit() {
		this.subscription.add(
			this.navigationService.routeData$().subscribe(routeData => {
				this.breadcrumbs = routeData.breadcrumbs;
			})
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
