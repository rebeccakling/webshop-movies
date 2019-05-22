import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../interfaces/ICartProduct';
import { InteractionService } from '../services/interaction.service';
import { IMovie } from '../interfaces/IMovie';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: ICartProduct[] = [];
  showShopphingCart = false;
  totalSum: number;


  //Får jag tillgång till det som finns i interactionService-klassen
  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.movieSource$.subscribe(
      info => {
        this.addToCart(info);

      }
    )
    //this.saveCartToLocalStorage();
    this.printCartFromLocalStorage();
    this.countTotalPrice()
  }

  addToCart(movieToAdd: IMovie) {

    let addedMovie = false;

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

    this.saveCartToLocalStorage();

  }

  saveCartToLocalStorage() {
    localStorage.setItem('myCartLocalStorage', JSON.stringify(this.cart));

    this.printCartFromLocalStorage();
  }

  printCartFromLocalStorage() {
    if (localStorage.getItem('myCartLocalStorage') === null) {
      this.cart = [];
    } else {
      let fetchLocalStorageCart = localStorage.getItem('myCartLocalStorage');
      this.cart = JSON.parse(fetchLocalStorageCart);
    }
    this.countTotalPrice();
  }
  dropDownMovieCart() {
    this.showShopphingCart = !this.showShopphingCart;
    this.countTotalPrice();
  }

  countTotalPrice() {

    this.totalSum = 0;
    console.log('Count total: ', this.cart);

    for (let i = 0; i < this.cart.length; i++) {
      console.log('In loop: ', this.cart[i]);

      // this.totalSum blir värdet av föregående värde och beräkning på höger sida om likamed tecknet
      this.totalSum += this.cart[i].movie.price * this.cart[i].amount;
    }

  }
  addOneMoreMovie(id: number) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].movie.id === id) {
        this.cart[i].amount++;
        this.cart[i].totalPriceOfMovie += this.cart[i].movie.price;
      }
    }
    this.saveCartToLocalStorage();
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
    this.saveCartToLocalStorage();
  }
}





