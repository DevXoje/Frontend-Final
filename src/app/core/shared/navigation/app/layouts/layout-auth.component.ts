import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-layout-auth',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="bg-primary" id="layoutAuthentication">
	<div id="layoutAuthentication_content">
		<ul>
		<li><a routerLink="/tienda" style="color: red;">tienda</a></li>
		<li><a routerLink="/dashboard" style="color: red;">admin</a></li>
	</ul>
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
