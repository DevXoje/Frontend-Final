import { Route } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { faBars, faEnvelope, faHeart, faPhoneAlt, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/core/categories/app/category.service';
import { Category } from 'src/app/core/categories/domain/category';
import { NavLink } from 'src/app/core/shared/nav-link';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	@Input() socialLinks: any[] = [];
	@Input() userData = { num_whises: 0, num_items_cart: 0, isLogged: false, total_cart: 0, user_name: '' };
	@Input() logo?: HTMLDivElement;
	@Input() num_phone?: string;
	categories: Category[] = [];
	navLinks: NavLink[] = [
		{
			name: 'Home',
			path: '/',
			icon: faBars,
			isActive: true
		},
		{
			name: 'Login',
			path: '/login',
			icon: faBars,
			isActive: true
		},
		{
			name: 'Sign Up',
			path: '/signup',
			icon: faBars,
			isActive: true
		},

		/* ,
		{
			name: 'Shop',
			path: '/shop',
			icon: faBars,
			isActive: false
		},
		{
			name: 'Pages',
			path: '/pages',
			icon: faBars,
			isActive: false
		},
		{
			name: 'Blog',
			path: '/blog',
			icon: faBars,
			isActive: false
		},
		{
			name: 'Contact',
			path: '/contact',
			icon: faBars,
			isActive: false
		} */
	];

	mailIcon = faEnvelope;
	userIcon = faUser;
	heartIcon = faHeart;
	bagIcon = faShoppingBag;
	phoneIcon = faPhoneAlt;
	burgerIcon = faBars;

	public isMenuCollapsed = false;

	constructor(private servicioCategorias: CategoryService) {
		this.servicioCategorias.getCategories()
			.then(categories => {
				this.categories = categories;
			});


	}

	ngOnInit(): void {
	}

}
