import {Component, OnInit} from '@angular/core';
import {Sidebar} from "../../../app-common/domain/sidebar";
import {Logout} from "../../../auth/state";
import {Store} from "@ngxs/store";
import {NotificationService} from "../../../app-common/services/notification.service";
import {Router} from "@angular/router";
import {faUserSlash} from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-admin-nav',
	templateUrl: './admin-nav.component.html',
	styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {
	unauthIcon = faUserSlash;

	sidebar: Sidebar = {
		title: "Admin",
		btn_content: "Logout",
	}

	constructor(private store: Store, private notificationService: NotificationService, private router: Router) {
	}

	ngOnInit(): void {
	}

	logoutHandler() {
		this.store.dispatch(new Logout(0)).subscribe({
			next: (state) =>
				this.router.navigateByUrl('/login').then(() =>
					this.notificationService.showSuccess('Logout successful', 'Logout')
				)
			,
			error: (err) => {
				this.notificationService.showSuccess(err.message, 'Logout NOT completed');
			}
		});
	}

}
