import { ApplicationRef, ChangeDetectorRef, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieId } from '@clone/models';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface MovieFilter {
  [key: string]: string[];
}
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movies: MovieId[] = [];
  public filteredMovies: MovieId[] = [];
  public sortArr: MovieId[] = [];
  public moviesForKids: MovieId[] = [];
  public loading$ = new BehaviorSubject(true);

  constructor(private readonly http: HttpClient, private readonly cdr: ApplicationRef) {
    if (this.movies.length < 1) {
      this.getMovieFromOurApi();
    }
  }

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
    keys.forEach(
      (key) => {
        const currentFilter = filterForm[key];
        this.filteredMovies = this.movies.filter(
          (movie) => (currentFilter.includes(movie[key as keyof MovieId]?.toString() || ''))
        )
      }
    )
  }

  sortRating(): void {
    this.loading$.subscribe(
      (res) => {
        if (!res) {
          console.log('sort', this.movies)
          this.sortArr = (this.movies).sort(
            (a, b) => b.ratingKinopoisk - a.ratingKinopoisk).slice(0, 100);
          console.log(this.sortArr)
          this.cdr.tick();
        }
      }
    )
  }

  filterByAge(): void {
    this.moviesForKids = (this.movies).filter(
      (item) => item.ratingAgeLimits !== null && +(item.ratingAgeLimits.slice(3)) < 12).slice(0, 50);
      console.log(this.movies)
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
