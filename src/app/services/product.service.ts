import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
    // Get api data when program running
   }

   getProduct(): Observable<Product[]>{
     //TODO: Populate products from an API and return an obverveble
    return this.http.get<Product[]>(apiUrl);
  }
}
