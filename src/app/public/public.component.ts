import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
	selector: 'app-public',
	template: `
	<app-nav [socialLinks]="socialLinks" [userData]="userData" [num_phone]="contactData.phone"></app-nav>
	<div class="container text-center">
		<router-outlet></router-outlet>
	</div>`
})
export class PublicComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
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
