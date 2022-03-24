export interface Auth {
	id?: number;
	name?: string;
	email: string;
	email_verified_at?: Date;
	password?: string;
	remenber_token?: string;
	role?: Roles;
	created_at?: string | Date;
	updated_at?: string | Date;
}
export interface AuthResponse {
	users: Auth[];
}
export type Roles = 'Admin' | 'Customer';

export interface AuthServiceInterface {
	getUsers(): Promise<Auth[]>;
	getUser(id: number): Promise<Auth>;
	createUser(user: Auth): Promise<Auth>;
	updateUser(user: Auth): Promise<Auth>;
	deleteUser(id: number): Promise<Auth>;
}

export class AuthStateModel {
	token?: string; // refreshToken?: string;
	email?: string;
	name?: string;
}