import { Injectable } from '@angular/core';

import { Product } from '../interfaces/product-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**
 * !Para utilizar las rutas de una api se deben importarr el módulo HttpClient
 * y luego se debe importar en el app.module.ts HttpClientModule
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Se especifica que se retorna un observable, por tant se le pasa el tipo de dato que retorna
  getProducts(): Observable<Product[]> {
    //se le dice que tipo de dato retorna la peticón.
    const products = this.http.get<Product[]>(`${this.API_URL}/product`);

    // console.log(products);

    return products;
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/product/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.API_URL}/product/create`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.API_URL}/product/${id}`);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API_URL}/product/${id}`, product);
  }
}
