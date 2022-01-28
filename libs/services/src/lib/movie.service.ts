import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieId, MovieResponse } from '@clone/models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private readonly http: HttpClient) {}

  getMovie(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      'https://kinopoiskapiunofficial.tech/api/v2.2/films/top',
      {
        headers: {
          'X-API-KEY': '9ea108a5-99f0-499a-a907-5373bb1396e6',
          'Content-Type': 'application/json',
        },
      }
    );
    // .pipe(map((data: Movie[]) => data.json()));
  }

  getMovieId(id: number) {
    return this.http.get<MovieId>('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + id, {
      headers: {
        'X-API-KEY': '9ea108a5-99f0-499a-a907-5373bb1396e6',
        'Content-Type': 'application/json',
      }
    })
  }
}
