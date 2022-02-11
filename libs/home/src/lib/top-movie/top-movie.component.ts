import {
  Component,
  OnInit,
  ViewEncapsulation,
<<<<<<< HEAD
  ChangeDetectionStrategy
=======
  ChangeDetectionStrategy,
  AfterViewChecked
>>>>>>> f1e903ce412b9218e3364cb0e6d5d6ac1765be1d
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
