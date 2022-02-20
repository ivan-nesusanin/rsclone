import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Category } from '../../category/schemas/category.schema';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  nameRu: string;

  @Prop()
  nameEn?: string;

  @Prop()
  kinopoiskId: number;

  @Prop()
  imdbId: string;

  @Prop()
  nameOriginal: string;

  @Prop()
  posterUrl: string;

  @Prop()
  posterUrlPreview: string;

  @Prop()
  reviewsCount: number;

  @Prop()
  ratingGoodReview: number;

  @Prop()
  ratingGoodReviewVoteCount: number;

  @Prop()
  ratingKinopoisk: number;

  @Prop()
  ratingKinopoiskVoteCount: number;

  @Prop()
  ratingImdb: number;

  @Prop()
  ratingImdbVoteCount: number;

  @Prop()
  ratingFilmCritics: number;

  @Prop()
  ratingFilmCriticsVoteCount: number;

  @Prop()
  ratingAwait: number;

  @Prop()
  ratingAwaitCount: number;

  @Prop()
  ratingRfCritics: number;

  @Prop()
  ratingRfCriticsVoteCount: number;

  @Prop()
  webUrl: string;

  @Prop()
  year: number;

  @Prop()
  filmLength: number;

  @Prop()
  slogan: string;

  @Prop()
  description: string;

  @Prop()
  shortDescription: string;

  @Prop()
  editorAnnotation: string;

  @Prop()
  isTicketsAvailable: boolean;

  @Prop()
  productionStatus: [];

  @Prop()
  type: [];

  @Prop()
  ratingMpaa: string;

  @Prop()
  ratingAgeLimits: string;

  @Prop()
  hasImax: boolean;

  @Prop()
  has3D: boolean;

  @Prop()
  lastSync: string;

  @Prop()
  countries: [];

  @Prop()
  genres: [];

  @Prop()
  startYear: number;

  @Prop()
  endYear: number;

  @Prop()
  serial: boolean;

  @Prop()
  shortFilm: boolean;

  @Prop()
  completed: boolean;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] })
  category: Category[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
