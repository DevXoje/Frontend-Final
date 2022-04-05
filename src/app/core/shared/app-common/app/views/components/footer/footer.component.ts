import { Component, Input, OnInit } from '@angular/core';
import { faStripe } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-footer',
	template: `
	<footer class="py-4 bg-light mt-auto">
		<div class="container-fluid">
			<div class="d-flex align-items-center justify-content-between small">
				<div class="text-muted">Copyright &copy; Your Website 2020</div>
				<div><a href="#">Privacy Policy &middot;</a><a href="#">Terms &amp; Conditions</a></div>
			</div>
		</div>
	</footer>`,
	//templateUrl: './footer.component.html',
	//styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	@Input() contactData = {
		phone: '',
		email: '',
		address: '',
	};
	@Input() socialLinks = [{
		name: '',
		link: '',
		icon: ''
	}];
	@Input() logo?: HTMLDivElement;


	usefulLinks = [
		[{ name: "About Us", path: "" },
		{ name: "About Our Shop", path: "" },
		{ name: "Secure Shopping", path: "" },
		{ name: "Delivery infomation", path: "" },
		{ name: "Privacy Policy", path: "" },
		{ name: "Our Sitemap", path: "" }],
		[{ name: "Who We Are", path: "" },
		{ name: "Our Services", path: "" },
		{ name: "Projects", path: "" },
		{ name: "Contact", path: "" },
		{ name: "Innovation", path: "" },
		{ name: "Testimonials", path: "" }
		]];
	stripeIcon = faStripe;
	constructor() {

	}

	ngOnInit(): void {
	}

}
