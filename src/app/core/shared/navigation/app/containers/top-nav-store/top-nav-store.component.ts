import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Icon, Link } from '@shared/navigation/domain/models';
import { NavigationService } from '../../../infrastructure/services';

@Component({
	selector: 'app-top-nav-store',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './top-nav-store.component.html',
	styleUrls: ['./top-nav-store.component.scss']
})
export class TopNavStoreComponent implements OnInit {
	@Input() isLogged: boolean = false;
	email: string;
	socialLinks: Icon[] = [];
	iconMail = faMailBulk;
	userName: string = "Juan";
	navItems: Link[] = [
		{ text: "Home", path: "/" },
		{ text: "Shop", path: "/shop" },
		{ text: "Blog", path: "/blog" },
		{ text: "Contact", path: "/contact" },
	];//Falta implementar el dropdown
	isCollapsed = false;
	constructor(private navigationService: NavigationService) {
		this.email = "mi email";
		this.socialLinks = [
			{ path: "https://www.facebook.com/", icon: faFacebookF },
			{ path: "https://twitter.com/", icon: faTwitter },
		];
	}
	ngOnInit() { }
	toggleSideNav() {
		this.navigationService.toggleSideNav();
	}
	toggleCollapsed() {
		this.isCollapsed = !this.isCollapsed;
	}
}
