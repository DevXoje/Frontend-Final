import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-layout-auth',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="bg-primary" id="layoutAuthentication">
	<div id="layoutAuthentication_content">
		<main>
			<ng-content></ng-content>
		</main>
	</div>
	<div id="layoutAuthentication_footer">
		<app-footer></app-footer>
	</div>
</div>`
})
export class LayoutAuthComponent implements OnInit {
	constructor() { }
	ngOnInit() { }
}
