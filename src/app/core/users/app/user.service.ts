import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { User } from '../domain/User';
import { users } from '../infrastructure/user-adapter';
import { HttpErrorHandler, HandleError } from '../../../http-error-handler.service';
import { UserResponse } from '../domain/User-response';


@Injectable({
	providedIn: 'root'
})
export class UserService {
	/* private users: User[] = users; */
	private users: User[] = users;
	private eventoUrl = environment.baseUrl + '/users';
	constructor(public http: HttpClient) {

		const copy = JSON.stringify(this.users)
		this.http.get(this.eventoUrl).subscribe(data => {
			console.log(data);
		}, (error) => {
			console.log(error);
		})
	}
	getEventos(): Observable<any> {
		return this.http.get<UserResponse>(this.eventoUrl)

		// return this.http.get<UserResponse>(this.eventoUrl, { headers }).pipe(
		// 	map((response: UserResponse) => response.users),
		// 	catchError((resp: HttpErrorResponse) => throwError(`Error obteniendo users. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`)
		// 	)
		// );

	}


}

