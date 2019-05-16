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


  //Får jag tillgång till det som finns i interactionService-klassen
  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.movieSource$.subscribe(
      info => {
        this.addToCart(info);

      }
    )
    //this.saveCartToLocalStorage();
    this.printCart();
  }

  addToCart(movieToAdd: IMovie) {

    let addedMovie = false;

    for (let i = 0; i < this.cart.length; i++) {
      if (movieToAdd.id === this.cart[i].movie.id) {
        this.cart[i].amount++;
        addedMovie = true;
        // console.log(movieToAdd.id);
        // console.log(movieToAdd.name);
      }
    }
    if (addedMovie === false) {
      this.cart.push({ movie: movieToAdd, amount: 1 });
      // console.log(movieToAdd.id);
      // console.log(movieToAdd.name);
    }

    this.saveCartToLocalStorage();

  }

  saveCartToLocalStorage() {
    localStorage.setItem('myCartLocalStorage', JSON.stringify(this.cart));

    this.printCart();
  }

  printCart() {
    if(localStorage.getItem('myCartLocalStorage') === null){
      this.cart = [];
    }else {
      let fetchLocalStorageCart = localStorage.getItem('myCartLocalStorage');
      this.cart = JSON.parse(fetchLocalStorageCart);
    }
  }
}