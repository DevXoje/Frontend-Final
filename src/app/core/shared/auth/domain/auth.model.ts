export type Auth = {
	id?: number;
	name?: string;
	user_name: string;
	email_verified_at?: Date;
	password?: string;
	remenber_token?: string;
	role?: Roles;
	created_at?: string | Date;
	updated_at?: string | Date;
	token?: string;
}
export type AuthResponse = {
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

export type AuthStateModel = {
	selectedUser: Auth | null;
	/* token?: string; // refreshToken?: string;
	user_name?: string;
	name?: string;
	password?: string; */
}
export type LoginData = {
	user_name?: '',
	password?: '',
	remember?: boolean
};
export type SignUpData = {
	name: string;
	user_name: string;
	password: string;
}
export type SignUpFormData = {
	name: string;
	user_name: string;
	password: string;
	confirm_password: string;
}
