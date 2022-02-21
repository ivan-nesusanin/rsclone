import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieId } from '@clone/models';
import { MovieFilter, MovieService } from '@clone/services';

@Component({
  selector: 'clone-movie-home-page',
  templateUrl: './movie-home-page.component.html',
  styleUrls: ['./movie-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieHomePageComponent implements OnInit {
  public movies: MovieId[] = [];

  constructor(public movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getMovieFromOurApi().subscribe((res) => {
      this.movies = res;
    });
  }

  onChangeFilter(formValue: MovieFilter) {
    this.movieService.filter(formValue);
  }
}
