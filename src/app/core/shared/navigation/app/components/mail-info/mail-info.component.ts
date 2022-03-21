import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Breadcrumb } from '../../../domain/models';
import { NavigationService } from '../../../infrastructure/services';

@Component({
	selector: 'app-mail-info',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<span>
		<fa-icon [icon]="iconMail"></fa-icon> <a href="mailto:{{email}}">{{email}}</a>
	</span>
	<span>
		Free Shipping for all Order of $99
	</span>	`
})
export class MailInfoComponent implements OnInit, OnDestroy {
	iconMail = faMailBulk;
	email: string;


	constructor() {
		this.email = "mi email";

	}
	ngOnInit() {

	}

	ngOnDestroy() {
	}
}
