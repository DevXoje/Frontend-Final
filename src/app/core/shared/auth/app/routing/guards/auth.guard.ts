import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from '@shared/auth/infrastructure/ngxs/auth.state';
import { AuthService } from '@shared/auth/infrastructure/services';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private store: Store) { }
	canActivate(): boolean {
		const token = this.store.selectSnapshot(AuthState.token);
		return token !== undefined;
	}
}
