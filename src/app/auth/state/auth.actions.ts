import {LoginData, RegisterData} from '../domain/auth.model';

export class Login {
	static readonly type = '[Auth] Login';

	constructor(public loginData: LoginData) {
	}
}

export class Restore {
	static readonly type = '[Auth] Restore';
	//constructor(public restoreData: RestoreData) { }
}

export class Logout {
	static readonly type = '[Auth] Logout';

	constructor(public id: number) {
	}
}

export class Signup {
	static readonly type = '[Auth] SignUp';

	constructor(public registerData: RegisterData) {
	}
}

export class GetAllUsers {
	static readonly type = '[Auth] GetAll';
}

export class DeleteUser {
	static readonly type = '[Auth] Delete';

	constructor(public id: number) {
	}
}

/* export class GetSelectedUser {
	static readonly type = '[Auth] GetAll';
} */
