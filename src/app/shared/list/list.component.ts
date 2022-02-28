import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { compare, SortableHeaderDirective, SortColumn, SortEvent } from 'src/app/directives/sortable-header.directive';

@Component({
	selector: 'app-list',
	template: `
<table class="table table-striped">
	<caption>{{title}}</caption>
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col" *ngFor="let titulo of titulos" [sortable]="titulo" (sort)="onSort($event)"
				style="cursor: pointer;">{{titulo}}</th>
		</tr>
	</thead>
	<tbody>
		<tr *ngFor="let item of data; index as i" class="col">
			<th scope="row">{{ i + 1 }}</th>
			<td *ngFor="let titulo of titulos">{{item[titulo]}}</td>
		</tr>
	</tbody>
</table>`})
export class ListComponent implements OnInit {
	@Input() titulos: SortColumn[] = [];
	DATA_DEFAULT: any[] = [];
	@Input() data: any[] = [];
	@Input() title: string = 'Lista';

	ngOnInit(): void {
	}
	@ViewChildren(SortableHeaderDirective) headers?: QueryList<SortableHeaderDirective>;

	onSort({ column, direction }: SortEvent) {
		this.DATA_DEFAULT = (this.DATA_DEFAULT) ? this.data : this.DATA_DEFAULT;
		// resetting other headers
		this.headers?.forEach(header => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		// sorting countries
		if (direction === '' || column === '') {
			this.data = this.DATA_DEFAULT;
		} else {
			this.data = this.data.sort((a, b) => {
				const res = compare(a[column], b[column]);
				return direction === 'asc' ? res : -res;
			});
		}
	}


}
