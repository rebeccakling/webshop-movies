import { Component, OnInit } from '@angular/core'
import { ICartProduct } from '../interfaces/ICartProduct'
import { InteractionService } from '../services/interaction.service'
import { IMovie } from '../interfaces/IMovie'
import * as $ from 'jquery'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cart: ICartProduct[] = []
  showShopphingCart = false
  totalSum: number
  totalAmount: number

  //Får jag tillgång till det som finns i interactionService-klassen
  constructor(private interactionService: InteractionService) {}

  ngOnInit() {
    this.interactionService.printCartFromLocalStorage()
    this.cart = this.interactionService.getCart()
    this.countTotalAmount()
    this.countTotalPrice()

    this.interactionService.movieSource$.subscribe(cart => {
      this.print(cart)
    })
    $(document).on('click', function(e) {
      if ($(e.target).closest('.cartContainer').length === 0) {
        $('.dropDownCart').removeClass('showCart')
        $('.dropDownCart').addClass('hideCart')
      }
    })
  }


  cartToggle() {
    if ($('.dropDownCart').hasClass('hideCart')) {
      $('.dropDownCart').removeClass('hideCart')
      $('.dropDownCart').addClass('showCart')
    } else {
      $('.dropDownCart').addClass('hideCart')
      $('.dropDownCart').removeClass('showCart')

    }
  }

  countTotalPrice() {

    this.totalSum = 0;
 
    for (let i = 0; i < this.cart.length; i++) {


      // this.totalSum blir värdet av föregående värde och beräkning på höger sida om likamed tecknet
      this.totalSum += this.cart[i].movie.price * this.cart[i].amount
    }
  }

  print(cart) {
    this.cart = cart

    this.countTotalAmount()
    this.countTotalPrice()
  }

  countTotalAmount() {
    this.totalAmount = 0

    for (let i = 0; i < this.cart.length; i++) {

      // this.totalSum blir värdet av föregående värde och beräkning på höger sida om likamed tecknet
      this.totalAmount += this.cart[i].amount
    }
  }

  addMovie(singleMovie: IMovie) {
    this.interactionService.sendCart(singleMovie)
    this.cart = this.interactionService.cart

    this.countTotalAmount()
    this.countTotalPrice()
  }

  deleteMovie(id) {
    this.interactionService.subtractMovie(id)

    this.countTotalAmount()
    this.countTotalPrice()
  }
}
