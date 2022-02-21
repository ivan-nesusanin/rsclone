import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { MovieId } from '@clone/models';
import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  public topMovie: MovieId[] = [];
  public familyMovie: MovieId[] = [];
  public familyTitle = 'Смотреть всей семьей';
  public newMovie: MovieId[] = [];
  public newMovieTitle = 'Новинки';
  public kidsMovie: MovieId[] = [];
  public kidsMovieTitle = 'Для детей';
  public idFamily = 'second';
  public idNew = 'third';

  constructor(public movieService: MovieService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.movieService.getMovieFromOurApi().subscribe(
      (res) => {
        this.topMovie = (res).sort(
          (a, b) => b.ratingKinopoisk - a.ratingKinopoisk).slice(0, 100);

          this.familyMovie = (res).filter(
          (item) => item.ratingAgeLimits !== null && +(item.ratingAgeLimits.slice(3)) < 12).slice(0, 50);

          this.newMovie = (res).filter(
          (item) => item.year > 2020);

        this.kidsMovie = (res).filter((item) =>
          item.genres.find((item) => item.genre === 'мультфильм') !== undefined
        );
        this.cdr.detectChanges();
      }
    )
  }
}
