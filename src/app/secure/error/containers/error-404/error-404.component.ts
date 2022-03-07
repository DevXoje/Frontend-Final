import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'sb-error-404',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
 <sb-layout-error>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-6">
				<div class="text-center mt-4">
					<img class="mb-4 img-error" src="assets/img/error-404-monochrome.svg" />
					<p class="lead">This requested URL was not found on this server.</p>
					<a routerLink="/dashboard">
						<fa-icon class="mr-1" [icon]='["fas", "arrow-left"]'></fa-icon>Return to Dashboard
					</a>
				</div>
			</div>
		</div>
	</div>
</sb-layout-error>`,
})
export class Error404Component implements OnInit {
	constructor() { }
	ngOnInit() { }
}
