import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-top-movie',
  templateUrl: './top-movie.component.html',
  styleUrls: ['./top-movie.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TopMovieComponent implements OnInit {
  p1 = 1;

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieFromOurApi();
    this.movieService.sortRating();
  }
}
