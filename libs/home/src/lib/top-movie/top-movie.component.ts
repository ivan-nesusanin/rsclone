import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import {/*  Movie, */ MovieId } from '@clone/models';
import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-top-movie',
  templateUrl: './top-movie.component.html',
  styleUrls: ['./top-movie.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopMovieComponent implements OnInit {
  p = 1;
  // public movies: Partial<Movie>[] = [];
  public ourMovies: MovieId[] = [];
  public sortArr: MovieId[] = [];


  constructor(
    private movieService: MovieService,
    private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.movieService.getMovie().subscribe(({ films }) => {
    //   this.movies = films;
    //   this.cdr.detectChanges();
    // });

    this.movieService.getMovieFromOurApi().subscribe((response) => {
      this.ourMovies = response;
      this.cdr.detectChanges();

      this.sortRating()
    });
  }

  sortRating(): void {
    this.sortArr = this.ourMovies.sort( (a, b) => b.ratingKinopoisk - a.ratingKinopoisk ).slice(0, 100);
    this.cdr.detectChanges();
    // console.log(this.sortArr)
  }
}
