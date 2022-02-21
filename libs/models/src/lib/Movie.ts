import { CategoryModel } from '..';

export interface MovieId {
  _id: string;
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn?: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: [];
  type: [];
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: Country[];
  genres: Genre[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}

export interface Genre {
  genre: string;
}

export interface Country {
  country: string;
}

export interface Category {
  category: string;
}

// export interface MovieResponse {
//   pageCount: number;
//   films: Partial<Movie>[];
// }

// export interface Movie {
//   countries: [];
//   filmId: number;
//   filmLength: string;
//   genres: Genre[];
//   nameEn: string;
//   nameRu: string;
//   posterUrl: string;
//   posterUrlPreview: string;
//   rating: string;
//   ratingChange: object;
//   ratingVoteCount: number;
//   year: string;
// }
