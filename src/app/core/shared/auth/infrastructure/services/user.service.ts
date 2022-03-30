import { Injectable } from '@angular/core';
import { Auth } from '@shared/auth/domain/auth.model';
import { Observable, ReplaySubject } from 'rxjs';


const userSubject: ReplaySubject<Auth> = new ReplaySubject(1);

@Injectable()
export class UserService {
	constructor() {
		this.user = {
			id: -1,
			name: 'Null Name',
			user_name: '',
			email_verified_at: new Date(),
			password: '',
			remenber_token: '',
			role: 'Admin',
			created_at: '',
			updated_at: ''
		};
	}

	set user(user: Auth) {
		userSubject.next(user);
	}

	get user$(): Observable<Auth> {
		return userSubject.asObservable();
	}
}
