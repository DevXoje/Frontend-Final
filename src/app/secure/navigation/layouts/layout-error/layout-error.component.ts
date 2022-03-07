import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'aop-layout-error',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div id="layoutError">
    <div id="layoutError_content">
        <main><ng-content></ng-content></main>
    </div>
    <div id="layoutError_footer"><app-footer></app-footer></div>
</div>`
})
export class LayoutErrorComponent implements OnInit {
	constructor() { }
	ngOnInit() { }
}
