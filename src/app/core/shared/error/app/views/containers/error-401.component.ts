import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-error-401',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<app-layout-error>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="text-center mt-4">
						<h1 class="display-1">401</h1>
						<p class="lead">Unauthorized</p>
						<p>Access to this resource is denied.</p>
						<a routerLink="/dashboard">
							<fa-icon class="mr-1" [icon]='["fas", "arrow-left"]'></fa-icon>Return to Dashboard
						</a>
					</div>
				</div>
			</div>
		</div>
	</app-layout-error>`
})
export class Error401Component implements OnInit {
	constructor() { }
	ngOnInit() { }
}