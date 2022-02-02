import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie, MovieId } from '@clone/models';
import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-movie-home-page',
  templateUrl: './movie-home-page.component.html',
  styleUrls: ['./movie-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieHomePageComponent implements OnInit {
  public movies: Partial<Movie>[] = [];
  public ourMovies: Partial<MovieId>[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovie().subscribe(({ films }) => {
      this.movies = films;
      // console.log(this.movies);
    });
    this.movieService.getMovieFromOurApi().subscribe((response) => {
      this.ourMovies = response;
      // console.log(this.ourMovies);
    });
  }
}
