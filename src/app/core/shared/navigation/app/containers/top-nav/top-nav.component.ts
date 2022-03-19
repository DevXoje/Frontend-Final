import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../infrastructure/services';

@Component({
	selector: 'app-top-nav',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" routerLink="/dashboard">Start Bootstrap</a><button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" data-cy="topNavToggleSideNav" (click)="toggleSideNav()"><fa-icon [icon]='["fas", "bars"]'></fa-icon></button>
    <!-- Navbar Search-->
    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div class="input-group">
            <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div class="input-group-append">
                <button class="btn btn-primary" type="button"><fa-icon [icon]='["fas", "search"]'></fa-icon></button>
            </div>
        </div>
    </form>
    <!-- Navbar-->
    <ul class="navbar-nav ml-auto ml-md-0">
        <app-top-nav-user></app-top-nav-user>
    </ul>
</nav>	`
})
export class TopNavComponent implements OnInit {
	constructor(private navigationService: NavigationService) { }
	ngOnInit() { }
	toggleSideNav() {
		this.navigationService.toggleSideNav();
	}
}
