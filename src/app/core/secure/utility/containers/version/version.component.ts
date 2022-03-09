import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../../utility/services';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-version',
	template: `<span>{{version}}</span>`
})
export class VersionComponent implements OnInit {
	version!: string;
	constructor(private utilityService: UtilityService) { }
	ngOnInit() {
		this.utilityService.version$.pipe(take(1)).subscribe(v => (this.version = v));
	}
}
