import { Component, OnInit } from '@angular/core';
import { faChartLine, faUsers, faCubes } from '@fortawesome/free-solid-svg-icons';


@Component({
	selector: 'app-nav-admin',
	templateUrl: './nav-admin.component.html',
})
export class NavAdminComponent implements OnInit {
	public isMenuCollapsed = false;
	/* navLinks: NavLink[] = [ */
	navLinks = [
		{
			name: 'Dashboard',
			path: '/secure/home',
			icon: faChartLine,
			isActive: true
		},
		{
			name: 'Users',
			path: '/secure/auth',
			icon: faUsers,
			isActive: true
		},
		{
			name: 'Products',
			path: '/secure/products',
			icon: faCubes,
			isActive: true
		},
	]
	constructor() { }

	ngOnInit(): void {
	}

}
