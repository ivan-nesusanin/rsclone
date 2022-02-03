import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  public ourMovies: MovieId[] = [];
  public arrGenres: string[] = [];
  public arrCountries: string[] = [];
  public arrFiltered: string[] = [];
  form!: FormGroup;

  constructor(
    private movieService: MovieService,
    private readonly cdr: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    this.movieService.getMovieFromOurApi().subscribe((response) => {
      this.ourMovies = response;
      this.addGenreItem();
      this.addCountryItem();
    });

    this.form = new FormGroup({
      genre: new FormControl('Жанры:'),
      country: new FormControl('Страны:')
    });
  }

  addGenreItem(): void {
    this.ourMovies.map((item) => {
      item.genres.forEach((arr) => {
        if (!this.arrGenres.includes(arr.genre)) {
          this.arrGenres.push(arr.genre);
          this.cdr.detectChanges();
        }
      })
    })
  }

  addCountryItem(): void {
    this.ourMovies.map((item) => {
      item.countries.forEach((arr) => {
        if (!this.arrCountries.includes(arr.country)) {
          this.arrCountries.push(arr.country);
          this.cdr.detectChanges();
        }
      })
    })
  }

  getGenre(): void {
    console.log(this.form.value.genre);

  }

  getCountry(): void {
    console.log(this.form.value.country);
  }
}
