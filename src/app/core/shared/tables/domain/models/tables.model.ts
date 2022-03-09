import { Roles } from "@shared/auth/domain/auth.model";
import { Product } from "src/app/core/products/domain/Products";

export interface Country {
	[key: string]: string | number;
	id: number;
	name: string;
	flag: string;
	area: number;
	population: number;
}

export interface Customer {
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

