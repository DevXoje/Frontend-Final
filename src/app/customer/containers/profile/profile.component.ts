import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/auth/domain/auth.model';
import { AuthState } from 'src/app/auth/state/auth.state';
import { Order } from 'src/app/shop/domain/shop.model';
import { OrderState } from 'src/app/shop/state/shop.state';
import { Customer } from '../../domain/customer.model';

@Component({
	selector: 'app-customer-profile',
	templateUrl: './profile.component.html',
	styles: [
		`
			.profile-head {
				transform: translateY(5rem);
			}

			.cover {
				/* background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
				 */background-size: cover;
				background-repeat: no-repeat;
			}

			body {
				background: #654ea3;
				background: linear-gradient(to right, #e96443, #904e95);
				min-height: 100vh;
				overflow-x: hidden;
			}
		`,
	],
})
export class CustomerProfileComponent implements OnInit {
	@Select(AuthState.getSelectedAuth) customer$?: Observable<Customer>;
	@Select(OrderState.getSelectedOrder) lastOrder$?: Observable<Order>;

	constructor(private store: Store, private http: HttpClient) {}
	iconMark = faMapMarker;
	ngOnInit(): void {
		/* const path = environment.baseUrl + '/auth/profile';
		this.http.get(path).subscribe({
			next: (data) => {
				console.log('data fetch', data);
			},
			error: (err) => {
				console.error('profile error', err);
			},
		}); */
	}
}
