import { Injectable } from '@angular/core';
import { MovieId } from '@clone/models';
import { MovieService } from '@clone/services';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  public sortArr: MovieId[] = [];
  public moviesForKids: MovieId[] = [];

  constructor(public movieService: MovieService) {}

  sortRating(): void {
    this.sortArr = (this.movieService.movies).sort(
      (a, b) => b.ratingKinopoisk - a.ratingKinopoisk).slice(0, 100);
    console.log(this.sortArr)
  }

  filterByAge(): void {
    this.moviesForKids = (this.movieService.movies).filter(
      (item) => item.ratingAgeLimits !== null && +(item.ratingAgeLimits.slice(3)) < 12).slice(0, 50);
    console.log(this.moviesForKids)
  }
}
