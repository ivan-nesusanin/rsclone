import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MovieHomePageComponent } from './movie-home-page/movie-home-page.component';

export const movieRoutes: Route[] = [
  { path: '', component: MovieHomePageComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule, RouterModule.forChild(movieRoutes)],
  declarations: [MovieHomePageComponent],
  exports: [MovieHomePageComponent],
})
export class MovieModule {}
