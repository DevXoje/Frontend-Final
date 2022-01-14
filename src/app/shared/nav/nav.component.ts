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
			icon: 'home'
		},
		{
			name: 'Shop',
			link: '/shop',
			icon: 'Shop'
		},
		{
			name: 'Pages',
			link: '/pages',
			icon: 'Pages'
		},
		{
			name: 'Blog',
			link: '/blog',
			icon: 'blog'
		},
		{
			name: 'Contact',
			link: '/contact',
			icon: 'Contact'
		}
	];

	@Input() userData = { num_whises: 0, num_items_cart: 0, isLogged: false, tota_cart: 0 };
	mailIcon = faEnvelope;
	userIcon = faUser;
	heartIcon=faHeart;
	bagIcon=faShoppingBag;
	constructor() { }

	ngOnInit(): void {
	}

}
