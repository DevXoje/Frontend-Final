import { Auth } from "@shared/auth/domain/auth.model";

export interface AuthResponse {
	ok: boolean;
	user: Auth;
	error?: string;
}
