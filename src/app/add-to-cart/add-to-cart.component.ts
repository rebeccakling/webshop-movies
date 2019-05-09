import { Component, OnInit, Input, Output } from '@angular/core';
import { ICartProduct } from '../interfaces/ICartProduct';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  //Input id: number är nu kopplad till productpresentaion html
  @Input() id: number;
 

  addMovieToCart(){
    //Här ska vi lägga till i kundkorgen
    
  }
  
  constructor() { }

  ngOnInit() {
  }

}
