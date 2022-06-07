import {HttpGenericService, HttpResponse,} from 'src/app/app-common/services/HttpGenericAdapter';
import {Customer} from 'src/app/customer/domain/customer.model';

export type LoginData = {
	email: string;
	password: string;
};
export type RegisterData = {
	username: string;
	password: string;
};
export type Auth = LoginData & {
	id: number;
	role: string;
	token: string;

};

export type AuthStateModel = {
	users: Auth[] | Customer[];
	selectedUser: Auth | Customer | null;
};
export type AuthServiceInterface = HttpGenericService<Auth> & {
	login(user: LoginData): Promise<HttpResponse<LoginResponse>>;
	restore(): Promise<HttpResponse<Auth>>;
};
export type LoginResponse = {
	token: string;
	auth: Customer | Auth;
	//name: string;
};

export const LoginFields = ["email", "password"];
export const RegisterFields = [...LoginFields, "name", "password_confirmation"];
