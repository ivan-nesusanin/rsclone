import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { MovieId } from '@clone/models';

@Component({
  selector: 'clone-block-on-home-page',
  templateUrl: './block-on-home-page.component.html',
  styleUrls: ['./block-on-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockOnHomePageComponent {
  p = 1;

  @Input()
  set arrWithMovie(movies: MovieId[]) {
    this._arrWithMovie = movies;
  }
  get arrWithMovie() {
    return this._arrWithMovie;
  }
  public _arrWithMovie: MovieId[] = [];

  @Input()
  public blockTitle = '';

  @Input() id = '';

}
