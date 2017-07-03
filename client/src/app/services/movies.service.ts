import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class MoviesService {
  constructor(private http: Http){
    console.log('MoviesService');
  }

  getMovies(movieString){
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=0058d43a094e9d8f63318cf2d24d8f15&query='+movieString)
      .map(res => res.json());
  }
}
