import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Auth } from 'src/app/auth/domain/auth.model';
import { Product } from 'src/app/product/domain/product.model';

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class SortableHeaderDirective {
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
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
export const compare = (
  v1: string | number | boolean,
  v2: string | number | boolean) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

