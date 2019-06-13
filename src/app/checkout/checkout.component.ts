import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { ICartProduct } from '../interfaces/ICartProduct';
import { IMovie } from '../interfaces/IMovie';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IOrder } from '../interfaces/IOrder';
import { DataServiceService } from '../services/data-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  timeNow = moment().format('lll');
  cart: ICartProduct[] = [];
  totalSum: number;
  totalAmount: number;
  orderForm: FormGroup = this.fb.group({

    emailAdress: ['', [Validators.required, Validators.email]],
    paymentMethod: ['', Validators.required]

  });

  //Får jag tillgång till det som finns i bl.a interactionService-klassen
  constructor(private interactionService: InteractionService, private router: Router, private fb: FormBuilder, private dataService: DataServiceService) { }

  ngOnInit() {
    this.interactionService.printCartFromLocalStorage();
    this.cart = this.interactionService.getCart();
    this.countTotalAmount();
    this.countTotalPrice();

    this.interactionService.movieSource$.subscribe(
      cart => {
        this.print(cart);

      }
    )
  }

  countTotalPrice() {

    this.totalSum = 0;

    for (let i = 0; i < this.cart.length; i++) {
    
      // this.totalSum blir värdet av föregående värde och beräkning på höger sida om likamed tecknet
      this.totalSum += this.cart[i].movie.price * this.cart[i].amount;
    }

  }

  print(cart) {

    this.cart = cart;

    this.countTotalAmount();
    this.countTotalPrice();

  }

  countTotalAmount() {
    this.totalAmount = 0;

    for (let i = 0; i < this.cart.length; i++) {


      // this.totalSum blir värdet av föregående värde och beräkning på höger sida om likamed tecknet
      this.totalAmount += this.cart[i].amount;

      console.log('total amount is: ' + this.totalAmount);

    }
  }

  //Plus ikonen går till denna funktionen går till sentCart funktionen i interactionservice, och uppdaterar cart.
  addMovie(singleMovie: IMovie) {
    this.interactionService.sendCart(singleMovie);

    this.cart = this.interactionService.cart;

    this.countTotalAmount();
    this.countTotalPrice();
  }

  //Plus ikonen går till denna funktionen som går till delete funktionen i interactionservice, och uppdaterar cart.
  deleteMovie(id) {
    this.interactionService.subtractMovie(id);

    this.countTotalAmount();
    this.countTotalPrice();

  }

  //Här postar en order till databasen, man hämtar id från formuläret och från egenskaper
  postOrder() {
    if (this.orderForm.valid) {
      let orderRowsContent = [];

      for (let i = 0; i < this.cart.length; i++) {
        let amount = this.cart[i].amount;
        let id = this.cart[i].movie.id;

        orderRowsContent.push({ productId: id, amount: amount });
      }
    
      let order: IOrder = {
        id: 0,
        companyId: 14,
        created: this.timeNow, //timegrejen
        createdBy: this.orderForm.get('emailAdress').value,
        paymentMethod: this.orderForm.get('paymentMethod').value,
        totalPrice: this.totalSum,
        status: 0,
        orderRows: orderRowsContent

      }

      this.dataService.postOrder(order).subscribe();
      this.clearCart();

      this.router.navigate(['/confirmed']);
    }
  }

  //Ropar på funktionen clearCartLocalstorage som finns i interactionService
  clearCart() {
    this.interactionService.clearCartLocalstorage();
  }
}