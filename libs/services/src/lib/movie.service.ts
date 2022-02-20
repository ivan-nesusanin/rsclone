import { ApplicationRef, Injectable } from '@angular/core';
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

  constructor(
    private readonly http: HttpClient,
    private readonly cdr: ApplicationRef
  ) {
    if (this.movies.length < 1) {
      this.getMovieFromOurApi();
    }
  }

  getMovieId(id: number) {
    return this.http.get<MovieId>('http://localhost:3333/api/movie/' + id);
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

// getMovie(): Observable<MovieResponse> {
//   return this.http.get<MovieResponse>(
//     'https://kinopoiskapiunofficial.tech/api/v2.2/films/top',
//     {
//       headers: {
//         'X-API-KEY': '9ea108a5-99f0-499a-a907-5373bb1396e6',
//         'Content-Type': 'application/json',
//       },
//     }
//   );
// .pipe(map((data: Movie[]) => data.json()));
// }

// getMovieId(id: string) {
//   return this.http.get<MovieId>('http://localhost:3333/api/movie/' + id);
// }

// filterGenre(formResponse: string): void {
//   this.movies.filter((item) => (item.genres.filter((item) => item.genre === formResponse)).length > 0
//   )
// }
