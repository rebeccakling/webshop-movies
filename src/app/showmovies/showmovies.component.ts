import { Component, OnInit } from '@angular/core'
import { IMovie } from '../interfaces/IMovie'
import { DataServiceService } from '../services/data-service.service'

@Component({
  selector: 'app-showmovies',
  templateUrl: './showmovies.component.html',
  styleUrls: ['./showmovies.component.css'],
})
export class ShowmoviesComponent implements OnInit {
  moviesArray: IMovie[]

  //getdata är en funktion i classen dataService.ts som ligger i DataService.ts.
  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    //Här så subscribear vi på det datat som vi får från getData.
    //fetchMovie är all data är värdet av hela getData funktionen.
    this.dataService.fetchMovies().subscribe(fetchMovie => (this.moviesArray = fetchMovie))
  }
}
