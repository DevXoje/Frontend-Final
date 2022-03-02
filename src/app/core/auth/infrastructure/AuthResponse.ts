import { Auth } from "../domain/Auth";

export interface AuthResponse {
	ok: boolean;
	user: Auth;
	error?: string;
}
