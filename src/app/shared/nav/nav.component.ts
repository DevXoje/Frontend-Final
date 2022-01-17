import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope, faHeart, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	@Input() socialLinks: any[] = [];
	navLinks = [
		{
			name: 'Home',
			link: '/home',
			icon: 'home',
			isActive: true
		},
		{
			name: 'Shop',
			link: '/shop',
			icon: 'Shop',
			isActive: false
		},
		{
			name: 'Pages',
			link: '/pages',
			icon: 'Pages',
			isActive: false
		},
		{
			name: 'Blog',
			link: '/blog',
			icon: 'blog',
			isActive: false
		},
		{
			name: 'Contact',
			link: '/contact',
			icon: 'Contact',
			isActive: false
		}
	];

	@Input() userData = { num_whises: 0, num_items_cart: 0, isLogged: false, total_cart: 0, user_name: '' };
	@Input() logo?: HTMLDivElement;


	mailIcon = faEnvelope;
	userIcon = faUser;
	heartIcon = faHeart;
	bagIcon = faShoppingBag;
	constructor() { }

	ngOnInit(): void {
	}

}
