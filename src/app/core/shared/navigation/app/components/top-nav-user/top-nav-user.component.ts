import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService, AuthService } from '@shared/auth/infrastructure/services';
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
			<fa-icon [icon]='["fas", "user"]'></fa-icon>
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
	constructor(public userService: UserService, private authService: AuthService) {
		userService.user = this.authService.getUser(4);
	}
	ngOnInit() { }
}
