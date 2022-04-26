import { Component, Input } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
	selector: 'app-loader',
	template: `
		<ng-container *ngIf="loading">
			<div class="overlay"></div>
			<div class="spinner">
				<div class="spinner-border" role="status">
					<!-- <span class="sr-only">Loading...</span> -->
				</div>
			</div>
		</ng-container>
	`,
	styles: [
		`
			.spinner {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				z-index: 3;
			}

			.overlay {
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				position: absolute;
				z-index: 2;
				backdrop-filter: blur(2px);
			}
		`,
	],
})
export class LoaderComponent {
	loading: boolean = true;
	@Input() message = '';
	constructor(private loaderService: LoaderService) {
		this.loaderService.loading$.subscribe(
			(isLoading) => (this.loading = isLoading)
		);
	}
}
