import { CreateResponse } from "src/app/app-common/services/HttpGenericAdapter";

export type LoginData = {
	email: string;
	password: string;
}
export type RegisterData = {
	username: string;
	password: string;
}
export type RestoreData = {
	id: number;
	token: string;
}
export type Auth = LoginData & {
	id: number;
	role: string;
	token: string;
}
export type AuthStateModel = {
	users: Auth[];
	selectedUser: Auth;
}
export type AuthServiceInterface = {
	getAll(): Promise<Auth[]>;
	getById(id: number): Promise<Auth>;
	create(user: RegisterData): Promise<CreateResponse<Auth>>;
	login(user: LoginData): Promise<LoginResponse
	>;
}
export type LoginResponse = {
	access_token: string;
	token_type: string;
	expires_in: number;
	user: Auth;
}
