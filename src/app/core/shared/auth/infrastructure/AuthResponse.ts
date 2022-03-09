import { Auth } from "../domain/auth.model";

export interface AuthResponse {
	ok: boolean;
	user: Auth;
	error?: string;
}
