import { Auth } from "./Auth";

export interface AuthServiceInterface {
	getUsers(): Promise<Auth[]>;
	getUser(id: number): Promise<Auth>;
	createUser(user: Auth): Promise<Auth>;
	updateUser(user: Auth): Promise<Auth>;
	deleteUser(id: number): Promise<Auth>;
}
