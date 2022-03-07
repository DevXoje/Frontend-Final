import { Roles } from "./Roles";

export interface Auth {
	id: number;
	name: string;
	email: string;
	email_verified_at: Date;
	password: string;
	remenber_token: string;
	role: Roles;
	created_at: string | Date;
	updated_at: string | Date;
}
