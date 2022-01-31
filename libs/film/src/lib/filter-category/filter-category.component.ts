import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';

// перенесу потом в models
export interface Film {
  countries: [],
  filmId: number,
  filmLength: string,
  genres: [],
  nameEn: string,
  nameRu: string,
  posterUrl: string,
  posterUrlPreview: string,
  rating: string,
  ratingChange: object,
  ratingVoteCount: number,
  year: string
}

@Component({
  selector: 'clone-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FilterCategoryComponent implements OnInit {
  films: Film[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Film[]>('https://kinopoiskapiunofficial.tech/api/v2.2/films/435', {
      headers: {
        'X-API-KEY': '9ea108a5-99f0-499a-a907-5373bb1396e6',
        'Content-Type': 'application/json',
      }
    })
    .subscribe(response => {
      this.films = response;
      console.log(this.films)
    })
  }
}
