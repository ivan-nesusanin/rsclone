export interface Movie {
  countries: [];
  filmId: number;
  filmLength: string;
  genres: Genre[];
  nameEn: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  rating: string;
  ratingChange: object;
  ratingVoteCount: number;
  year: string;
}

export interface MovieResponse {
  pageCount: number;
  films: Partial<Movie>[];
}

export interface Genre {
  genre: string;
}
