import { Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { MovieId } from '@clone/models';
import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-block-on-home-page',
  templateUrl: './block-on-home-page.component.html',
  styleUrls: ['./block-on-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockOnHomePageComponent implements OnInit {
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

    this.movieService.getMovieFromOurApi()
  }

  sortRating(): void {
    this.sortArr = this.ourMovies.sort( (a, b) => b.ratingKinopoisk - a.ratingKinopoisk ).slice(0, 100);
    this.cdr.detectChanges();
    // console.log(this.sortArr)
  }
}
