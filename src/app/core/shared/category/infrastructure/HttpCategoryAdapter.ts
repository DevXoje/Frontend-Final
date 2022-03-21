/* export class CategoryAdapter {
}
 */
export const categories = [];
import { HttpClient } from "@angular/common/http";
import { Category } from "../domain/category.model";
import { CategoryServiceInterface } from "../domain/CategoryServiceInterface";


export class HttpCategoryAdapter implements CategoryServiceInterface {
	constructor(private http: HttpClient, private url: string) { }
	async getCategories(): Promise<Category[]> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Category>(this.url).subscribe(
				(users) => {
					resolve(users)
				},
				(error) => {
					console.error('getCategory Error: ', error.message);
					reject(error)
				}
			);
		});
		console.log('PAYLOAD', payload);
		return payload as Category[]
	}

	async getCategory(id: number): Promise<Category> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Category>(this.url + id).subscribe(
				(user) => {
					resolve(user)
				},
				(error) => {
					console.error('getCategory Error: ', error.message);
					reject(error)
				}
			);
		});
		console.log('PAYLOAD', payload);
		return payload as Category;
	}
	async createCategory(user: Category): Promise<Category> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post<Category>(this.url, user).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Category;
	}
	async updateCategory(user: Category): Promise<Category> {
		const payload = await new Promise((resolve, reject) => {
			this.http.put<Category>(this.url + '/' + user.id, user).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Category;
	}
	async deleteCategory(id: number): Promise<Category> {
		const payload = await new Promise((resolve, reject) => {
			this.http.delete<Category>(this.url + '/' + id).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Category;
	}
}
