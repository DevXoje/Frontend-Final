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
				(categories) => {
					resolve(categories)
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
				(category) => {
					resolve(category)
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
	async createCategory(category: Category): Promise<Category> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post<Category>(this.url, category).subscribe(
				(category) => resolve(category),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Category;
	}
	async updateCategory(category: Category): Promise<Category> {
		const payload = await new Promise((resolve, reject) => {
			this.http.put<Category>(this.url + '/' + category.id, category).subscribe(
				(category) => resolve(category),
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
				(category) => resolve(category),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Category;
	}
}
