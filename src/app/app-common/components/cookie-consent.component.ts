import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';


@Component({
	selector: 'app-cookie-consent',
	template: `
		<div
			class="cookie-consent position-fixed bottom-0 start-0 bg-black text-white col-12 col-sm-6 col-md-4 rounded z-index-1 lh-1 fs-1"
			(click)="handleAccept()">
			<span>
				This site uses cookies to enhance user experience. see
				<a class="ml-1 text-decoration-none" [routerLink]="'/terms'">Privacy policy</a>
			</span>
			<div class=" d-flex align-items-center justify-content-around">
				<button class="btn btn-sm btn-primary">Allow cookies</button>
				<button class="btn btn-sm btn-warning" (click)="handleCancel()">Cancel</button>
			</div>
		</div>`,
	
})
export class CookieConsentComponent implements OnInit, OnChanges {

	constructor() {
	}

	ngOnInit(): void {
	}

	ngOnChanges(changes: SimpleChanges): void {

	}

	handleAccept() {
		console.log('accepted');
	}

	handleCancel() {
		console.log('cancelled');
	}

}
