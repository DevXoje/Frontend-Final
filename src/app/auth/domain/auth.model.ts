import {
	HttpGenericService,
	HttpResponse,
} from 'src/app/app-common/services/HttpGenericAdapter';
import { Customer } from 'src/app/customer/domain/customer.model';

export type LoginData = {
	email: string;
	password: string;
};
export type RegisterData = {
	username: string;
	password: string;
};
export type RestoreData = {
	id?: number;
	token: string;
};
export type Auth = LoginData & {
	id: number;
	role: string;
	token: string;
};
export type AuthStateModel = {
	users: Auth[];
	selectedUser: Auth;
};
export type AuthServiceInterface = HttpGenericService<Auth> & {
	create(user: RegisterData): Promise<HttpResponse<Auth>>;
	login(user: LoginData): Promise<HttpResponse<LoginResponse>>;
	restore(): Promise<HttpResponse<Auth>>;
};
export type LoginResponse = {
	token: string;
	auth: Customer | Auth;
	//name: string;
};
