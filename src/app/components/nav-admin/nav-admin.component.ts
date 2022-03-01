import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/interfaces/nav-link';
import { faChartLine, faUsers, faCubes } from '@fortawesome/free-solid-svg-icons';


@Component({
	selector: 'app-nav-admin',
	templateUrl: './nav-admin.component.html',
})
export class NavAdminComponent implements OnInit {
	public isMenuCollapsed = false;
	navLinks: NavLink[] = [
		{
			name: 'Dashboard',
			path: '/admin',
			icon: faChartLine,
			isActive: true
		},
		{
			name: 'Users',
			path: '/admin/auth',
			icon: faUsers,
			isActive: true
		},
		{
			name: 'Products',
			path: '/admin/products',
			icon: faCubes,
			isActive: true
		},
	]
	constructor() { }

	ngOnInit(): void {
	}

}
