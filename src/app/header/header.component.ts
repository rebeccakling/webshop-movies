import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../interfaces/ICartProduct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: ICartProduct[] = []

  constructor() { }

  ngOnInit() {
  }

}
