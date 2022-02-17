import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieId } from '@clone/models';
import { Observable } from 'rxjs';

export interface MovieFilter {
  [key: string]: string[];
}
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movies: MovieId[] = [];
  public filteredMovies: MovieId[] = [];

  constructor(private readonly http: HttpClient) {}

  getMovieId(id: number) {
    return this.http.get<MovieId>(
      'https://kinopoiskapiunofficial.tech/api/v2.2/films/' + id,
      {
        headers: {
          'X-API-KEY': '9ea108a5-99f0-499a-a907-5373bb1396e6',
          'Content-Type': 'application/json',
        },
      }
    );
  }

  getMovieFromOurApi(): Observable<MovieId[]> {
    return this.http.get<MovieId[]>('http://localhost:3333/api/movie');
  }

  filter(filterForm: MovieFilter) {
    const keys = Object.keys(filterForm);
    keys.forEach((key) => {
      const currentFilter = filterForm[key];
      this.filteredMovies = this.movies.filter((movie) =>
        currentFilter.includes(movie[key as keyof MovieId]?.toString() || '')
      );
    });
  }
}
