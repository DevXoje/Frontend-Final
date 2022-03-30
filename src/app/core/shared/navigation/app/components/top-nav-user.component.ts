import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Select, Store } from '@ngxs/store';
import { Auth } from '@shared/auth/domain/auth.model';
import { AuthState } from '@shared/auth/infrastructure/ngxs/auth.state';
import { AuthService, UserService } from '@shared/auth/infrastructure/services';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Component({
	selector: 'app-top-nav-user',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<li class="nav-item dropdown dropdown-user no-caret"
	*ngIf="user$ | async as user"
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
			{{user.name}}
		</a>
		<div class="dropdown-menu dropdown-menu-right"
		ngbDropdownMenu
		aria-labelledby="dropdownUser">
			<ng-container *ngIf="user.name!==undefined;else elseBlock">
				<h6 class="dropdown-header">
					<div class="dropdown-user-details">
						<div class="dropdown-user-details-name">{{ user.name }} - {{ user.id }}</div>
						<div class="dropdown-user-details-email">{{ user.user_name }}</div>
					</div>
				</h6>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" routerLink="/logout" >Logout</a>
			</ng-container>
			<ng-template #elseBlock>
				<form action=""></form>
				<a class="dropdown-item" routerLink="/login" >Login</a>
			</ng-template>
		</div>
	</li>`,
})
export class TopNavUserComponent implements OnInit {
	@Select(AuthState.userDetails) user$!: Observable<Auth>;
	isLogged!: boolean;
	userIcon = faUser;
	data = {};
	constructor(private store: Store) {


	}
	ngOnInit() {
		this.store.select(AuthState.userDetails);

	}
}
