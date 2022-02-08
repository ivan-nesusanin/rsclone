import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  // ChangeDetectorRef
} from '@angular/core';
// import {/*  Movie, */ MovieId } from '@clone/models';
import { MovieService, HomePageService } from '@clone/services';

@Component({
  selector: 'clone-top-movie',
  templateUrl: './top-movie.component.html',
  providers: [MovieService, HomePageService],
  styleUrls: ['./top-movie.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TopMovieComponent implements OnInit {
  p = 1;
  // public ourMovies: MovieId[] = [];


  constructor(
    // public movieService: MovieService,
    public homePageService: HomePageService,
    /* private readonly cdr: ChangeDetectorRef */) {}

  ngOnInit(): void {
    this.homePageService.sortRating();
    // this.movieService.getMovieFromOurApi();
  }
}
