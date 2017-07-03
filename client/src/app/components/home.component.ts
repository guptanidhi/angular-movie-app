import { Component } from "@angular/core";

@Component({
  selector: 'home',
  template: `
          <div style="text-align: center;border-style: groove;">
            <img src={{imagePath}} alt="MOVIE LOGO" height="150px" width="150px" />
            <h2>{{heading}}</h2>
            <p>{{subheading}}</p>
          </div>
          `
})

export class HomeComponent{
  heading = "Movie Search Portal";
  imagePath = "./app/images/movie.png";
  subheading = "Please Login to Search your Favourite Movies...";
}
