import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthState, Logout} from "../../auth/state";
import {Auth} from "../../auth/domain/auth.model";

@Component({
	selector: 'app-dashboard-layout',
	templateUrl: './dashboard.layout.html',
	styleUrls: ['./dashboard.layout.scss']
})
export class DashboardLayoutComponent {
	@Select(AuthState.getSelectedAuth) auth$?: Observable<Auth>;

	nav = [{
		text: "Overview",
		link: "/dashboard/home",
		active: true
	}, {
		text: "Payments",
		link: "/dashboard/home",
		active: false
	}, {
		text: "Cards",
		link: "/dashboard/home",
		active: false
	}, {
		text: "Customers",
		link: "/dashboard/home",
		active: false
	},]

	constructor(private store: Store, private route: Router) {
	}

	logout() {
		this.store.dispatch(Logout).subscribe(
			{
				next: () => {
					this.route.navigate(['/auth/login']);
				}
			}
		);
	}

}
