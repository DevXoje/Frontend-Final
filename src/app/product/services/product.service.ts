import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product, ProductSearch } from '../domain/product.model';

@Injectable(
  { providedIn: 'root' }
)
export class ProductService {

  constructor(private router: Router) { }
  private productMocked: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripcion del producto 1',
      price: 100,
      quantity: 10,
      created_at: '2020-01-01',
      updated_at: '2020-01-01',
      image: 'https://www.google.com/url?sa=i&,url=https%3A%2F%2Fwww.elmundo.es%2Fcultura%2Fnoticia%2F2020%2F01%2F01%2F5e2f8f9c-f8f9-11ea-9f3f-0242ac130003_noticia_157878.html&psig=AOvVaw2_Z_ZYZYZYZYZYZYZYZYZY&ust=1581207838897000',
      category_id: 1,
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripcion del producto 2',
      price: 200,
      quantity: 5,
      created_at: '2020-01-01',
      updated_at: '2020-01-01',
      image: 'https://www.google.com/url?sa=i&,url=https%3A%2F%2Fwww.elmundo.es%2Fcultura%2Fnoticia%2F2020%2F01%2F01%2F5e2f8f9c-f8f9-11ea-9f3f-0242ac130003_noticia_157878.html&psig=AOvVaw2_Z_ZYZYZYZYZYZYZYZYZY&ust=1581207838897000',
      category_id: 1,
    },

  ];
  getAll(): Observable<Product[]> {
    return of(this.productMocked);
  }
  ordenBy(order: ProductSearch): Observable<Product[]> {
    const productsSorted = this.productMocked.sort(
      (a, b) => {
        return a[order] < b[order] ? -1 : a[order] > b[order] ? 1 : 0;
      });
    return of(productsSorted);
  }
  getById(id: number): Observable<Product> {
    const product = this.productMocked.filter(product => product.id == id)[0];
    return of(product as Product);
  }
  updateProduct(product: Partial<Product>): Observable<Product> {

    let newProduct: Product = {} as Product;
    if (product.id) {
      const oldProduct = this.getById(product.id).subscribe(oldProduct => {
        console.log(oldProduct);
        console.log(product);

        newProduct = { ...oldProduct, ...product };
        newProduct = { ...product, ...oldProduct };
        console.log(newProduct);
      });
    }

    return of(newProduct);
  }
}
