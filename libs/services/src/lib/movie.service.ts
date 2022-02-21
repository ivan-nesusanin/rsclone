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
      'http://localhost:3333/api/movie/' + id,
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
