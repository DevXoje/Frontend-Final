import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnInit,
	QueryList,
	ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '../../../directives';
import { Observable } from 'rxjs';
import { Customer } from '@shared/tables/domain/models';
import { CustomerService } from '@shared/tables/infrastructure/services';

@Component({
	selector: 'app-table-customers',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './table-customers.component.html',
	styles: ['thead > tr > th {cursor: pointer;}']
})
export class TableCustomersComponent implements OnInit {
	@Input() pageSize = 4;
	@Input() data: Customer[] = [];
	titles = [
		'name',
		'email',
		'role',
	];
	customers$!: Observable<Customer[]>;

	total$!: Observable<number>;
	sortedColumn!: string;
	sortedDirection!: string;

	@ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

	constructor(
		private changeDetectorRef: ChangeDetectorRef,
		public customerService: CustomerService
	) {	}

	ngOnInit() {
		this.customers$ = this.customerService.getUsersObservable();
		this.total$ = this.customerService.total$;
	}

	onSort({ column, direction }: SortEvent) {
		this.sortedColumn = column;
		this.sortedDirection = direction;
		this.customerService.sortColumn = column;
		this.customerService.sortDirection = direction;
		this.changeDetectorRef.detectChanges();

	}
}
