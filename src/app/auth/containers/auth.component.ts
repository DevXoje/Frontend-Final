import {Component} from '@angular/core';
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-auth',
	template: `
		<app-auth-layout>
			<div topHeader>
				<h3 class="text-muted mb-2">{{title|titlecase}}</h3>
				<div class="return" style="cursor: pointer"
				     [routerLink]="['../../shop/home']">
					<fa-icon [icon]="arrowIcon"></fa-icon>
					<span class="text-muted">Back to shop</span>
				</div>
			</div>
			<router-outlet name="authOutlet"></router-outlet>

		</app-auth-layout>
	`, styles: [`

	`]
})
export class AuthComponent {
	arrowIcon = faArrowAltCircleLeft;
	title: string = 'user';

	constructor() {
	}
}
