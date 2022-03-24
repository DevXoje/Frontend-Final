import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
	template:`
	<div class="card mb-4" [ngClass]="customClasses"><ng-content select=".card-header"></ng-content><ng-content select=".card-body"></ng-content><ng-content select=".card-footer"></ng-content></div>
`
})
export class CardComponent implements OnInit {
    @Input() background!: string;
    @Input() color!: string;

    customClasses: string[] = [];

    constructor() {}
    ngOnInit() {
        if (this.background) {
            this.customClasses.push(this.background);
        }
        if (this.color) {
            this.customClasses.push(this.color);
        }
    }
}
