import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';
import { InteractionService } from '../services/interaction.service';



@Component({
selector: 'app-details',
templateUrl: './details.component.html',
styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

singleMovie;

constructor(private route: ActivatedRoute, private service: DataServiceService, private interactionService: InteractionService) { }



ngOnInit() {
  this.route.paramMap.subscribe(myParams => {
    let id = myParams.get("id");
    //console.log(id);
    this.service.fetchSingleMovie(id).subscribe((data) => {
      this.singleMovie = data;
    });
  });
}


addMovieToCart(product) {
  console.log(product);
  this.interactionService.sendMovie(product);
}

}