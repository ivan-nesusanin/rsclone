import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MovieId } from '@clone/models';
import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieFilterComponent implements OnInit {
  public movieAll: MovieId[] = [];
  public arrGenres: string[] = [];
  public arrCountries: string[] = [];

  constructor(
    private movieService: MovieService,
    private readonly cdr: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    this.movieService.getMovieFromOurApi().subscribe((response) => {
      this.movieAll = response;
      this.getGenreItem();
      this.getCountryItem();
    });
  }

  getGenreItem(): void {
    this.movieAll.map((item) => {
      item.genres.forEach((arr) => {
        if (!this.arrGenres.includes(arr.genre)) {
          this.arrGenres.push(arr.genre);
          this.cdr.detectChanges();
        }
      })
    })
  }

  getCountryItem(): void {
    this.movieAll.map((item) => {
      item.countries.forEach((arr) => {
        if (!this.arrCountries.includes(arr.country)) {
          this.arrCountries.push(arr.country);
          this.cdr.detectChanges();
        }
      })
    })
  }
}
