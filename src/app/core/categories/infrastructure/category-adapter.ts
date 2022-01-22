/* export class CategoryAdapter {
}
 */


import { Route } from '@angular/router';
import { Category } from "../domain/category";

export const categories: Category[] = [
	{ id: 0, name: "fresh meat", link: { path: "ruta" } as Route, image: "/assets/img/categories/cat-1.jpg" },
	{ id: 1, name: "vegetables", link: { path: "ruta" } as Route, image: "/assets/img/categories/cat-2.jpg" },
	{ id: 2, name: "fruits & nut gits", link: { path: "ruta" } as Route, image: "/assets/img/categories/cat-3.jpg" },
	{ id: 3, name: "Fresh Berries", link: { path: "ruta" } as Route, image: "/assets/img/categories/cat-4.jpg" },
	{ id: 4, name: "Ocean Foods", link: { path: "ruta" } as Route, image: "/assets/img/categories/cat-5.jpg" },
	{ id: 5, name: "Butter & Eggs", link: { path: "ruta" } as Route, image: "/assets/img/categories/cat-1.jpg" },
	{ id: 6, name: "Fastfood", link: { path: "ruta" } as Route, image: "/assets/img/categories/cat-1.jpg" },
	{ id: 7, name: "Fresh Onion", link: { path: "ruta" } as Route, image: "/assets/img/categories/cat-1.jpg" },
	{ id: 8, name: "Papayaya & Crisps", link: { path: "ruta" } as Route, image: "/assets/img/categories/cat-1.jpg" },
	{ id: 9, name: "Oatmeal", link: { path: "ruta" } as Route, image: "/assets/img/categories/cat-1.jpg" }
];

