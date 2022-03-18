import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { faPhone, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


@Component({
	selector: 'app-store-head',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './store-head.component.html',
	styleUrls: ['./store-head.component.scss']
})
export class StoreHeadComponent implements OnInit {
	@Input() title!: string;
	@Input() hideBreadcrumbs = false;
	icon = faPhone;
	public model: any;
	isCollapsed = true;
	constructor() { }
	ngOnInit() { }
	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map(term => term.length < 2 ? []
				: states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
		)
}
