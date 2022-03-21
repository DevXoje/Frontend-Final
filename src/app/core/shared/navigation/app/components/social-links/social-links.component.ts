import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { socialLinks } from '@shared/navigation/infrastructure/data';
import { Subscription } from 'rxjs';
import { Breadcrumb } from '../../../domain/models';
import { NavigationService } from '../../../infrastructure/services';

@Component({
	selector: 'app-social-links',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<ul class="icon-bar">
		<li *ngFor="let socialLink of socialLinks" class="icon">
			<fa-icon [icon]="socialLink.icon"></fa-icon>
		</li>
	</ul>
	`,
	styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit, OnDestroy {

	socialLinks = socialLinks;
	constructor() { }
	ngOnInit() {

	}

	ngOnDestroy() {
	}
}
