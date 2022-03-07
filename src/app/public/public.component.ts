import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope, faHeart, faPhoneAlt, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';

import { SideNavItems } from '../core/shared/navigation-models';
import { sideNavItems, sideNavSections } from '../core/shared/side-nav.data';


@Component({
	selector: 'app-public',
	template: `
	<app-nav [sideNavItems]="sideNavItems"></app-nav>
	<!-- <div class="container text-center">
		<router-outlet></router-outlet>
	</div> -->`
})
export class PublicComponent implements OnInit {
	mailIcon = faEnvelope;
	userIcon = faUser;
	heartIcon = faHeart;
	bagIcon = faShoppingBag;
	phoneIcon = faPhoneAlt;
	burgerIcon = faBars;
	constructor() { }

	ngOnInit(): void {
	}
	
	sideNavItems = sideNavItems;
	sideNavSections = sideNavSections;
	sidenavStyle = 'sb-sidenav-dark';


	contactData = {
		phone: '+34 922 022 022',
		email: 'supermy@mail.com',
		address: 'Calle la pinta Villa Domrach', city: 'Madrid'
	};
	socialLinks = [
		{
			name: "facebook",
			link: "https://www.facebook.com/supermy",
			icon: faFacebook
		},
		{
			name: 'twiter',
			link: 'https://www.twitter.com/supermy',
			icon: faTwitter
		},
		{
			name: 'linkedin',
			link: 'https://www.linkedin.com/in/supermy',
			icon: faLinkedin
		},
		{
			name: 'pinterest',
			link: 'https://www.pinterest.com/supermy',
			icon: faPinterest
		}
	];
	userData = { num_whises: 2, num_items_cart: 1, isLogged: false, total_cart: 150.4, user_name: '' };
}
