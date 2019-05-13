import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { ICartProduct } from '../interfaces/ICartProduct';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private movieSourcen = new Subject<IMovie>();

  cart: ICartProduct[] = [];

  movieSourcen$ = this.movieSourcen.asObservable();
  sendMovie(product: IMovie) {
    this.movieSourcen.next(product);
  }


  constructor() { }
}
