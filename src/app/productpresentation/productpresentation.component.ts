import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-productpresentation',
  templateUrl: './productpresentation.component.html',
  styleUrls: ['./productpresentation.component.css']
})
export class ProductpresentationComponent implements OnInit {

  @Input() product: IMovie;
  @Output() remove = new EventEmitter <number>();

  constructor() { }

  ngOnInit() {
  }

  addMovieToCart(){
    //Här ska vi lägga till i kundkorgen
  }

}
