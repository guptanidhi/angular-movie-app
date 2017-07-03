import { Component } from "@angular/core";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: 'dashboard',
  template: `
          <div style="text-align: center;border-style: groove;padding: 10px;">
            <img src={{imagePath}} alt="MOVIE LOGO" height="150px" width="150px" />
            <h2>{{heading}}</h2>
            <input type="text" placeholder="Search Movie" #movieName>
            <button (click)="searchMovie(movieName.value)">Search</button>
          </div>
          `,
  providers: [MoviesService]
})

export class DashboardComponent{
  heading: string;
  imagePath: string;
  movies;

  constructor(private moviesService: MoviesService){
    this.heading = "Movie Search Portal";
    this.imagePath  = "./app/images/movie.png";
  }

  searchMovie(movieName){
    this.moviesService.getMovies(movieName).subscribe(movies => {
      this.movies = movies;
    });
    console.log(this.movies);
    console.log(this.movies.page);
    console.log(this.movies.total_results);
    console.log(typeof this.movies)
  }
}

interface Movies{
  // pages: number;
  // results: [];
}
