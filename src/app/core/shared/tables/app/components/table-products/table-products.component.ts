import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnInit,
	QueryList,
	ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '../../directives';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/products/domain/Products';
import { ProductService } from '@shared/tables/infrastructure/services/product.service';

@Component({
	selector: 'app-table-products',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './table-products.component.html',
	styles: ['thead > tr > th {cursor: pointer;}']
})
export class TableProductsComponent implements OnInit {
	@Input() pageSize = 4;
	titles = [
		'name',
		'email',
		'role',
	];
	mainTitles: any[] = [];
	products$!: Observable<Product[]>;

	total$!: Observable<number>;
	sortedColumn!: string;
	sortedDirection!: string;

	@ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

	constructor(
		public productService: ProductService,
		private changeDetectorRef: ChangeDetectorRef,
	) {

	}

	ngOnInit() {
		this.productService.pageSize = this.pageSize;

		this.products$ = this.productService.products$;

		this.total$ = this.productService.total$;
	}

	onSort({ column, direction }: SortEvent) {
		this.sortedColumn = column;
		this.sortedDirection = direction;
		this.productService.sortColumn = column;
		this.productService.sortDirection = direction;
		this.changeDetectorRef.detectChanges();

	}
}
