import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MovieHomePageComponent } from './movie-home-page/movie-home-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const movieRoutes: Route[] = [
  { path: '', component: MovieHomePageComponent },
  { path: ':id', component: MovieDetailComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule, RouterModule.forChild(movieRoutes)],
  declarations: [MovieHomePageComponent, MovieDetailComponent],
  exports: [MovieHomePageComponent, MovieDetailComponent],
})
export class MovieModule {}
