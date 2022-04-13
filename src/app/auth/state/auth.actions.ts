import { Auth, LoginData, RegisterData } from "../domain/auth.model";

export class Login {
	static readonly type = '[Auth] Login';
	constructor(public loginData: LoginData) { }
}
export class Logout {
	static readonly type = '[Auth] Logout';
	constructor(public id: number) { }
}
export class Signup {
	static readonly type = '[Auth] SignUp';
	constructor(public registerData: RegisterData) { }
}
export class GetAllUsers {
	static readonly type = '[Auth] GetAll';
}
