import {Component} from '@angular/core';
import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";

@Component({
	selector: 'app-auth-layout',
	templateUrl: './auth.layout.html',
	styleUrls: ['./auth.layout.scss']
})
export class AuthLayoutComponent {
	constructor() {
	}

	facebookIcon = faFacebook;

	googleIcon = faGoogle;


}
