import { Auth } from 'src/app/auth/domain/auth.model';

export type Customer = Auth & { address: string };
export type CustomerServiceInterface = {
	getLastOrder(id:number): Promise<Customer>;
};
