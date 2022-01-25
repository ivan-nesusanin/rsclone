import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../models/src/lib/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovie(): Observable<Movie[]> {
    return this.http.get<Movie[]>(
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
}
