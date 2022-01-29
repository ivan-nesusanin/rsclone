import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MovieHomePageComponent } from './movie-home-page/movie-home-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';

export const movieRoutes: Route[] = [
  { path: '', component: MovieHomePageComponent },
  { path: ':id', component: MovieDetailComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule, RouterModule.forChild(movieRoutes)],
  declarations: [MovieHomePageComponent, MovieDetailComponent, MovieFilterComponent],
  exports: [MovieHomePageComponent, MovieDetailComponent, MovieFilterComponent],
})
export class MovieModule {}
