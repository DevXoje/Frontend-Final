import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Order} from '../domain/shop.model';
import {GetAllOrders, OrderState} from '../state';
import {Router} from "@angular/router";

@Component({
	selector: 'app-gallery-orders',
	template: `
		<ng-container *ngIf="orders$ | async as orders">
			<ng-container *ngFor="let order of orders">
				<div class="payment">
					<div class="card green">
						<span>01/22</span>
						<span>•••• 4012</span>
					</div>
					<div class="payment-details">
						<h3>{{order.customer_id}}</h3>
						<div>
							<span>{{order.amount|currency:'EUR'}}</span>
							<span>{{order.updated_at|date}}</span><!--TODO:  date disapair on 2 seconds-->
							<button class="icon-button">
								<i class="ph-caret-right-bold"></i>
							</button>
						</div>
					</div>
				</div>

			</ng-container>

		</ng-container>

	`,
	styles: [`

		.payments {
			display: flex;
			flex-direction: column;
			margin-top: 1.5rem;
		}

		.payment {
			display: flex;
			align-items: center;

			& + * {
				margin-top: 1rem;
			}
		}

		.card {
			width: 125px;
			padding: 0.375rem;
			aspect-ratio: 3 / 2;
			flex-shrink: 0;
			border-radius: 6px;
			color: var(--c-gray-800);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			font-size: 0.75rem;
			font-weight: 600;

			&.green {
				background-color: var(--c-green-500);
			}

			&.olive {
				background-color: var(--c-olive-500);
			}

			&.gray {
				background-color: var(--c-gray-300);
			}

			span:last-child {
				align-self: flex-end;
			}
		}

		.payment-details {
			display: flex;
			width: 100%;
			flex-direction: column;
			margin-left: 1.5rem;

			h3 {
				font-size: 1rem;
				color: var(--c-text-tertiary);
			}

			div {
				margin-top: 0.75rem;
				padding-top: 0.75rem;
				padding-bottom: 0.75rem;
				border-top: 1px solid var(--c-gray-600);
				border-bottom: 1px solid var(--c-gray-600);
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex: 1;

				span {
					font-size: 1.5rem;
				}
			}
		}

		.payment-section {
			& > h2 {
				font-size: 1.5rem;
			}
		}

		.payment-section-header {
			display: flex;
			align-items: center;
			margin-top: 1rem;

			p {
				color: var(--c-text-tertiary);
				font-size: 0.875rem;
			}

			div {
				padding-left: 1rem;
				margin-left: auto;
				display: flex;
				align-items: center;

				& > * + * {
					margin-left: 0.5rem;
				}
			}
		}

		.card-button {
			display: flex;
			width: 50px;
			height: 34px;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			background-color: transparent;
			transition: 0.25s ease;
			border-radius: 4px;
			border: 2px solid var(--c-gray-600);
			color: var(--c-text-primary);
			cursor: pointer;

			&.mastercard svg {
				max-height: 15px;
			}

			&:focus,
			&:hover,
			&.active {
				color: var(--c-gray-800);
				background-color: var(--c-white);
				border-color: var(--c-white);
			}
		}

		.faq {
			margin-top: 1.5rem;
			display: flex;
			flex-direction: column;

			p {
				color: var(--c-text-tertiary);
				font-size: 0.875rem;
			}

			div {
				margin-top: 0.75rem;
				padding-top: 0.75rem;
				padding-bottom: 0.75rem;
				border-top: 1px solid var(--c-gray-600);
				border-bottom: 1px solid var(--c-gray-600);
				font-size: 0.875rem;
				display: flex;
				align-items: center;

				label {
					padding-right: 1rem;
					margin-right: 1rem;
					border-right: 1px solid var(--c-gray-600);
				}

				input {
					border: 0;
					background-color: transparent;
					padding: 0.25em 0;
					width: 100%;
				}
			}
		}

		.payment-section-footer {
			display: flex;
			align-items: center;
			margin-top: 1.5rem;
		}

		.save-button {
			border: 1px solid currentColor;
			color: var(--c-text-tertiary);
			border-radius: 6px;
			padding: 0.75em 2.5em;
			background-color: transparent;
			transition: 0.25s ease;
			cursor: pointer;

			&:focus,
			&:hover {
				color: var(--c-white);
			}
		}

		.settings-button {
			display: flex;
			align-items: center;
			color: var(--c-text-tertiary);
			background-color: transparent;
			border: 0;
			padding: 0;
			margin-left: 1.5rem;
			cursor: pointer;
			transition: 0.25s ease;

			i {
				margin-right: 0.5rem;
			}

			&:focus,
			&:hover {
				color: var(--c-white);
			}
		}

		input,
		select,
		a,
		textarea,
		button {
			&:focus {
				outline: 0;
				box-shadow: 0 0 0 2px var(--c-gray-800), 0 0 0 4px var(--c-gray-300);
			}
		}


	`]
})
export class GalleryOrdersComponent implements OnInit {

	@Select(OrderState.getOrderList)
	orders$?: Observable<Order[]> | undefined;

	constructor(private store: Store, private router: Router) {
		this.store.dispatch(GetAllOrders);
	}

	ngOnInit(): void {

	}


}
