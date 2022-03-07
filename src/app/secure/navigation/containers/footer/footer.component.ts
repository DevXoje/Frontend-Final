import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<footer class="py-4 bg-light mt-auto">
		<div class="container-fluid">
			<div class="d-flex align-items-center justify-content-between small">
				<div class="text-muted">Copyright &copy; Your Website 2020</div>
				<div><a href="#">Privacy Policy &middot;</a><a href="#">Terms &amp; Conditions</a></div>
			</div>
		</div>
	</footer>`
})
export class FooterComponent implements OnInit {
	constructor() { }
	ngOnInit() { }
}
