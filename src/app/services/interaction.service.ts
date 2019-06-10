import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { ICartProduct } from '../interfaces/ICartProduct';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private movieSourcen = new Subject<ICartProduct[]>();

  cart: ICartProduct[] = [];

  movieSource$ = this.movieSourcen.asObservable();

  constructor() { }

  sendCart(movieToAdd: IMovie) {

    let addedMovie = false;

    //movieToAdd.id = id på klickade filmen
    // this.cart[i].movie.id = id på den som finns i cart
    for (let i = 0; i < this.cart.length; i++) {
      if (movieToAdd.id === this.cart[i].movie.id) {
        this.cart[i].amount++;
        addedMovie = true;
        this.cart[i].totalPriceOfMovie += this.cart[i].movie.price;
        // console.log(movieToAdd.id);
        // console.log(movieToAdd.name);
      }

    }
    if (addedMovie === false) {
      this.cart.push({
        movie: movieToAdd, amount: 1,
        totalPriceOfMovie: movieToAdd.price
      }); 
      // console.log(movieToAdd.id);
      // console.log(movieToAdd.name);
    }
    this.movieSourcen.next(this.cart);

    this.saveCartToLocalStorage();
  }

  saveCartToLocalStorage() {
    localStorage.setItem('myCartLocalStorage', JSON.stringify(this.cart));
  }

  printCartFromLocalStorage() {
    if (localStorage.getItem('myCartLocalStorage') === null) {
      this.cart = [];
    } else {
      let fetchLocalStorageCart = localStorage.getItem('myCartLocalStorage');
      this.cart = JSON.parse(fetchLocalStorageCart);
    }
    this.getCart();
  }

  getCart() {
    return this.cart;
  }

  subtractMovie(id: number) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].movie.id === id) {
        if (this.cart[i].amount > 0) {
          this.cart[i].amount--;
          this.cart[i].totalPriceOfMovie -= this.cart[i].movie.price;
        }

        if (this.cart[i].amount === 0) {
          this.cart.splice(i, 1);
        }
      }
    }

    this.movieSourcen.next(this.cart);

    this.saveCartToLocalStorage();
  }

  clearCartLocalstorage(){
    this.cart.splice(0, this.cart.length);
 
    this.movieSourcen.next(this.cart);
 
    this.saveCartToLocalStorage();
 
  }

}
