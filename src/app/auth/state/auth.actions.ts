import {LoginData, RegisterData} from '../domain/auth.model';
import {Customer} from "../../customer/domain/customer.model";

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

export class UpdateUser {
	static readonly type = '[Auth] Update';

	constructor(public user: Partial<Customer>) {
	}
}

export class CompleteUser {
	static readonly type = '[Auth] Complete';

	constructor(public user: Partial<Customer>) {
	}
}

export class SetSelectedUser {
	static readonly type = '[Auth] Set';

	constructor(public id: number) {
	}
}


/* export class GetSelectedUser {
	static readonly type = '[Auth] GetAll';
} */
