import { Injectable } from '@angular/core';
import { IProduct } from './productModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
     
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('/api/products');}
}
