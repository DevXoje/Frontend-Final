import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-customer-profile',
	template: ` <div>profile</div>`,
})
export class CustomerProfileComponent implements OnInit {
	constructor(private store: Store, private http: HttpClient) {}

	ngOnInit(): void {
		const path = environment.baseUrl + '/auth/profile';
		this.http.get(path).subscribe({
			next: (data) => {
				console.log('data fetch', data);
			},
			error: (err) => {
				console.error('profile error', err);
			},
		});
	}
}
