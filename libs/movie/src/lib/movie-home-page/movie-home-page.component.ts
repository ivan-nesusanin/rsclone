import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { */ MovieId } from '@clone/models';
import { MovieFilter, MovieService } from '@clone/services';

@Component({
  selector: 'clone-movie-home-page',
  templateUrl: './movie-home-page.component.html',
  styleUrls: ['./movie-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieHomePageComponent {
  // public ourMovies: Partial<MovieId>[] = [];

  constructor(public movieService: MovieService) {}

  onChangeFilter(formValue: MovieFilter) {
    this.movieService.filter(formValue);
  }
}
