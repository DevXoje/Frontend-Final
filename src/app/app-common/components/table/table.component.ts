import {DecimalPipe, formatCurrency} from '@angular/common';
import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	PipeTransform,
	QueryList,
	SimpleChanges,
	ViewChildren,
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {SortableHeaderDirective, SortColumn, SortEvent,} from './directives/sortable.directive';

type typeMocked = {
	name: string;
	population: number;
};

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
	providers: [DecimalPipe],
})
export class TableComponent implements OnChanges {
	filter = new FormControl('');
	titulos: SortColumn[] = [];
	DATA_DEFAULT: Observable<any[]> | undefined = new Observable<any[]>();
	@Input() datos: Observable<any[]> | undefined = new Observable<any[]>();
	@Input() title: string = 'Lista';
	@Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
	@Output() onAdd: EventEmitter<any> = new EventEmitter<any>();
	@Output() onEdit: EventEmitter<number> = new EventEmitter<number>();
	page = 1;
	pageSize = 3;
	collectionSize = 0;
	paginationOptions = [3, 10, 20];
	iconPen = faPenToSquare;
	iconTrash = faTrash;
	@ViewChildren(SortableHeaderDirective)
	headers?: QueryList<SortableHeaderDirective>;

	constructor(private router: Router, private store: Store) {
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['datos']) {
			this.datos?.subscribe((data) => {
				if (data[0]) {
					this.titulos = Object.keys(data[0]) as SortColumn[];
					this.collectionSize = data.length;
				}
			});
			this.refreshData();
		}
	}

	onSort({column, direction}: SortEvent) {
		this.DATA_DEFAULT =
			this.DATA_DEFAULT && this.datos ? this.datos : this.DATA_DEFAULT;
		// resetting other headers
		this.headers?.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		// sorting
		if (direction === '' || column === '') {
			this.datos = this.DATA_DEFAULT;
		} else {
			this.datos?.subscribe((data) => {
				this.DATA_DEFAULT = of(
					data.sort((a, b) => {
						const res =
							a[column] < b[column]
								? -1
								: a[column] > b[column]
									? 1
									: 0;
						return direction === 'asc' ? res : -res;
					})
				);
			});
		}
	}

	search(text: string, pipe: PipeTransform): any[] {
		let resul: any[] = [];
		this.datos?.subscribe((data) => {
			resul = data.filter((dato) => {
				const term = text.toLowerCase();
				return dato.name.toLowerCase().includes(term);
				//  || pipe.transform(dato.area).includes(term)
				//  || pipe.transform(dato.population).includes(term);
			});
		});
		return resul;
	}

	refreshData() {
		this.DATA_DEFAULT = this.datos;
		this.DATA_DEFAULT?.subscribe((data) => {
			const dataSliced = data
				.map((dato: any, i: number) => ({id: i + 1, ...dato}))
				.slice(
					(this.page - 1) * this.pageSize,
					(this.page - 1) * this.pageSize + this.pageSize
				);
			this.DATA_DEFAULT = of(dataSliced);
		});
	}

	checkPaginator() {
		return this.collectionSize > this.pageSize;
	}

	// return type of data
	checkType(data: any) {
		let type = "";
		// check patter to date
		const regexDate = /^\d{4}-\d{2}-\d{2}/;
		if (regexDate.test(data)) {
			type = "date";
		}
		return type;
	}

	checkItemFormat(data: any) {
		let output = data;
		const regex = {
			date: /^\d{4}-\d{2}-\d{2}/,
			price: /^\d+\.\d{2}$/,
		}
		if (regex.date.test(data)) {
			const date = new Date(data);
			output = date.toLocaleDateString();
		} else if (regex.price.test(data)) {
			output = formatCurrency(parseInt(data), 'en-US', '€');//Todo: Falta establecer Locale en español
		} else if (typeof data == 'object') {

			output = "objeto";
		} else if (data == null || data == "") {
			output = "------";
		}
		return output;
	}
}
