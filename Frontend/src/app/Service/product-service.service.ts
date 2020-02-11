import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
cart = [] ;
constructor(private http: HttpClient) {

   }
getProducts() {
  return this.http.get('http://localhost:8080/products');
}
getproduct(id) {
  return this.http.get('http://localhost:8080/product/' + id);
}
}
