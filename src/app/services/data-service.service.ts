import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IOrder } from '../interfaces/IOrder';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  fetchMovies():Observable<IMovie[]>{
    return this.httpClient.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  fetchSingleMovie(id): Observable<IMovie>{
    return this.httpClient.get<IMovie>("https://medieinstitutet-wie-products.azurewebsites.net/api/products/" + id);
  }

  postOrder(order): Observable<IOrder> {
    return this.httpClient.post<IOrder>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order);
  }

  fetchOrderData(): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=14');
  }

  constructor(private httpClient: HttpClient) { }
}
