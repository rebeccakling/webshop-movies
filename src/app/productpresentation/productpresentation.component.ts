import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-productpresentation',
  templateUrl: './productpresentation.component.html',
  styleUrls: ['./productpresentation.component.css']
})
export class ProductpresentationComponent implements OnInit {

  @Input() product: IMovie;

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
  }

  addMovieToCart(product) {
    this.interactionService.sendMovie(product);
  }



}
