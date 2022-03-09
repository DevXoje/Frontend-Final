/* import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnInit,
	QueryList,
	ViewChildren,
} from '@angular/core';
import { Country } from '../../../tables/models';
import { CountryService } from '../../../tables/services';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-ng-bootstrap-table',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './ng-bootstrap-table.component.html',
	styles: ['thead > tr > th {cursor: pointer;}']
})
export class NgBootstrapTableComponent implements OnInit {
	@Input() pageSize = 4;
	titles = [
		'name',
		'email',
		'role',
	];
	mainTitles: any[] = [];
	countries$!: Observable<Country[]>;

	total$!: Observable<number>;
	sortedColumn!: string;
	sortedDirection!: string;

	@ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

	constructor(
		public countryService: CountryService,
		private changeDetectorRef: ChangeDetectorRef,
		private customerService: CustomerService
	) {

	}

	ngOnInit() {
		this.countryService.pageSize = this.pageSize;
		this.customers$ = this.customerService.getUsersObservable();
		this.countries$ = this.countryService.countries$;

		this.total$ = this.countryService.total$;
	}

	onSort({ column, direction }: SortEvent) {
		this.sortedColumn = column;
		this.sortedDirection = direction;
		this.countryService.sortColumn = column;
		this.countryService.sortDirection = direction;
		this.changeDetectorRef.detectChanges();

	}
}
 */
