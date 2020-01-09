import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DataServiceService } from '../services/data-service.service'
import { InteractionService } from '../services/interaction.service'
import { IMovie } from '../interfaces/IMovie'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  singleMovie: IMovie = {
    id: 0,
    description: '',
    name: '',
    price: 0,
    imageUrl: '',
    year: 0,
    added: '',


    productCategory: []
  };

  constructor(private route: ActivatedRoute, private service: DataServiceService, private interactionService: InteractionService) { }


  ngOnInit() {
    //När jag klickar på film (mer info) så skickar det id
    this.route.paramMap.subscribe(myParams => {
      let id = myParams.get('id')

      this.service.fetchSingleMovie(id).subscribe(data => {
        this.singleMovie = data
      })
    })
  }

  //Ropar på funktionen sendCart som ligger i interactionService
  addMovieToCart(product) {
    this.interactionService.sendCart(product)
  }
}
