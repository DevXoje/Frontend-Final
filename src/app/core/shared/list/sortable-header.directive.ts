import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Auth } from '../../auth/domain/Auth';
import { Product } from '../../products/domain/Products';

@Directive({
	selector: 'th[sortable]',
	host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()'
	}
})
export class SortableHeaderDirective {
	@Input() sortable: SortColumn = '' as SortColumn;
	@Input() direction: SortDirection = '' as SortDirection;
	@Output() sort = new EventEmitter<SortEvent>();

	rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.sortable, direction: this.direction });
	}

}
export interface SortEvent {
	column: SortColumn;
	direction: SortDirection;
}
export type SortableType = Auth & Product;
//export type SortColumn = any;
export type SortColumn = keyof SortableType | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1: string | number | boolean, v2: string | number | boolean) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
//export const compare = (v1: string | number , v2: string | number ) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
