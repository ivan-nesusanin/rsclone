import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  AfterViewChecked,
  Input,
} from '@angular/core';
import { MovieId } from '@clone/models';
import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-top-movie',
  templateUrl: './top-movie.component.html',
  styleUrls: ['./top-movie.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMovieComponent {
  @Input()
  set movieSortedByRating(movies: MovieId[]) {
    console.log('input', movies);
    this._movieSortedByRating = movies;
  }
  get movieSortedByRating() {
    return this._movieSortedByRating;
  }
  private _movieSortedByRating: MovieId[] = [];
  p1 = 1;
}
