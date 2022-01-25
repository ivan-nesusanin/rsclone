import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '@clone/models';
import { MovieService } from '@clone/services';
// import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-movie-home-page',
  templateUrl: './movie-home-page.component.html',
  styleUrls: ['./movie-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieHomePageComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovie().subscribe((data) => {
      this.movies = data;
      console.log(this.movies);
    });
  }
}
