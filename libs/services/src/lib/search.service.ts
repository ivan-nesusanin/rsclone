import { Injectable } from '@angular/core';
import { MovieId } from '@clone/models';
import { Subject } from 'rxjs';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public movies: MovieId[] = [];
  searchedMovies: MovieId[] = [];
  public enterValueSubject = new Subject();
  public searchMovieSubject = new Subject();
  substr = '';
  year = '';

  constructor(public movieService: MovieService) {}

  getMoviesBase() {
    // получаю общий массив фильмов
    this.movieService.getMovieFromOurApi().subscribe((res) => {
      this.movies = res;
      // console.log(this.movies)
    });
  }

  getEnterValue(enterValue: string) {
    //получаю строку из формы поиска
    this.substr = enterValue;
    // console.log(this.substr)
    this.enterValueSubject.next(enterValue);
  }

  getYearValue(yearValue: string) {
    this.year = yearValue;
  }

  searchMovies() {
    this.searchedMovies = this.movies
      .filter((item) => {
        return item.nameRu
          .toLocaleLowerCase()
          .includes(this.substr.toLocaleLowerCase());
      })
      // .filter((item) => {
      //   return item.year === +this.year;
      // });
    return this.searchedMovies;
  }
}
