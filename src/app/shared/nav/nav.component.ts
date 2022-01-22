import { Route } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { faBars, faEnvelope, faHeart, faPhoneAlt, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/core/categories/app/category.service';
import { Category } from 'src/app/core/categories/domain/category';

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

	mailIcon = faEnvelope;
	userIcon = faUser;
	heartIcon = faHeart;
	bagIcon = faShoppingBag;
	phoneIcon = faPhoneAlt;
	burgerIcon = faBars;

	constructor(private servicioCategorias: CategoryService) {
		this.servicioCategorias.getCategories()
			.then(categories => {
				this.categories = categories;
				console.log(this.categories[0].link.path);
			});


	}

	ngOnInit(): void {
	}

}
