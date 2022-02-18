import { Injectable } from '@angular/core';
import { MovieId } from '@clone/models';
import { Subject } from 'rxjs';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public movies: MovieId[] = [];
  searchedMovies: MovieId[] = [];
  public enterValueSubject = new Subject();
  public searchMovieSubject = new Subject();
  substr = '';

  constructor(public movieService: MovieService) {}

  getMoviesBase() { // получаю общий массив фильмов
    this.movieService.getMovieFromOurApi().subscribe((res) => {
      this.movies = res;
      // console.log(this.movies) // работает
    });
  }

  getEnterValue(enterValue: string) { //получаю строку из формы поиска
    this.substr = enterValue
    console.log(this.substr) // работает
    this.enterValueSubject.next(enterValue)
  }

  searchMovies() { // пытаюсь получить массив и передать его в компонент на отрисовку
    this.searchedMovies = this.movies.filter((item) => {
      return item.nameRu.toLocaleLowerCase().includes(this.substr.toLocaleLowerCase())
    })
    return this.searchedMovies;
  }
}
