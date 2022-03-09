import { Route } from '@angular/router';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { faBars, faEnvelope, faHeart, faPhoneAlt, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/core/categories/app/category.service';
import { Category } from 'src/app/core/categories/domain/category';
import { Observable, Subscription } from 'rxjs';
import { Auth } from '@shared/auth/domain/auth.model';
import { SBRouteData, SideNavItem, SideNavItems, SideNavSection } from '@shared/navigation/domain/models';
import { AuthService } from '@shared/auth/infrastructure/services';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	//changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	@Input() socialLinks: any[] = [];
	@Input() userData = { num_whises: 0, num_items_cart: 0, isLogged: false, total_cart: 0, user_name: '' };
	@Input() logo?: HTMLDivElement;
	@Input() num_phone?: string;
	categories: Category[] = [];
	navLinks: SideNavItem[] = [
		/* {
			name: 'Home',
			link: '/',
			icon: faBars,
			isActive: true
		},
		{
			name: 'Login',
			link: '/login',
			icon: faBars,
			isActive: true
		},
		{
			name: 'Sign Up',
			link: '/signup',
			icon: faBars,
			isActive: true
		},
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



	public isMenuCollapsed = false;


	@Input() sideNavItem!: SideNavItem;
	@Input() isActive!: boolean;

	expanded = false;
	routeData!: SBRouteData;
	//Side Nav
	@Input() sidenavStyle!: string;
	@Input() sideNavItems!: SideNavItems;
	@Input() sideNavSections!: SideNavSection[];

	subscription: Subscription = new Subscription();
	routeDataSubscription!: Subscription;

	user!: Observable<Auth>;

	constructor(private authService:AuthService) {
		this.user=this.authService.getUserObservable(4);


	}

	ngOnInit(): void {
	}

}
