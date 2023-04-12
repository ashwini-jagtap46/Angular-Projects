import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  postProduct(data: any): Observable<any[]> {
    return this.httpClient.post<any>(
      'http://localhost:3000/productList/',
      data
    );
  }
  getProduct() {
    return this.httpClient.get<any>('http://localhost:3000/productList/');
  }
  patchProduct(data: any, id: number) {
    return this.httpClient.patch<any>(
      'http://localhost:3000/productList/' + id,
      data
    );
  }
  deleteProduct(id: number) {
    return this.httpClient.delete<any>(
      'http://localhost:3000/productList/' + id
    );
  }
}
