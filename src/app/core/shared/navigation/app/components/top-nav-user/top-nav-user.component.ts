import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Auth } from '@shared/auth/domain/auth.model';
import { AuthService, UserService } from '@shared/auth/infrastructure/services';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-top-nav-user',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<li class="nav-item dropdown dropdown-user no-caret"
	*ngIf="userService.user$ | async as user"
	ngbDropdown
	placement="bottom-right"
	display="dynamic">
		<a class="nav-link dropdown-toggle"
		id="userDropdown"
		ngbDropdownToggle
		data-cy="userMenu"
		role="button"
		aria-haspopup="true"
		aria-expanded="false">
			<fa-icon [icon]='userIcon'></fa-icon>
		</a>
		<div class="dropdown-menu dropdown-menu-right"
		ngbDropdownMenu
		aria-labelledby="dropdownUser">
			<h6 class="dropdown-header">
				<div class="dropdown-user-details">
					<div class="dropdown-user-details-name">{{ user.name }} - {{ user.id }}</div>
					<div class="dropdown-user-details-email">{{ user.email }}</div>
				</div>
			</h6>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" routerLink="/dashboard">Settings</a>
			<a class="dropdown-item" routerLink="/dashboard">Activity Log</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" routerLink="/dashboard">Logout</a>
		</div>
	</li>`,
})
export class TopNavUserComponent implements OnInit {
	isLogged!: boolean;
	userIcon = faUser;
	constructor(
		public authService: AuthService,
		public userService: UserService) {

		//console.log(this.userService.user$);

	}
	async ngOnInit() {
		//this.userService.user = await this.authService.getUser(4);
	}
}
