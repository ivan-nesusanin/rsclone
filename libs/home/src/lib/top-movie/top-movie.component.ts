import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { MovieId } from '@clone/models';

@Component({
  selector: 'clone-top-movie',
  templateUrl: './top-movie.component.html',
  styleUrls: ['./top-movie.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMovieComponent {
  p1 = 1;

  @Input()
  set movieSortedByRating(movies: MovieId[]) {
    this._movieSortedByRating = movies;
  }
  get movieSortedByRating() {
    return this._movieSortedByRating;
  }
  private _movieSortedByRating: MovieId[] = [];
}
