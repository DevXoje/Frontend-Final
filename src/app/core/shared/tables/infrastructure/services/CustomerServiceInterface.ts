import { Customer } from "@shared/tables/domain/models";

export interface CustomerServiceInterface {
	getUsers(): Promise<Customer[]>;
	getUser(id: number): Promise<Customer>;
	createUser(user: Customer): Promise<Customer>;
	updateUser(user: Customer): Promise<Customer>;
	deleteUser(id: number): Promise<Customer>;
}
