import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { GenrePageComponent } from './genre-page/genre-page.component';

const categoriesRoutes: Route[] = [
  { path: '', component: GenrePageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(categoriesRoutes)
  ],
  declarations: [
    GenrePageComponent
  ],
  exports: [
    GenrePageComponent
  ],
})
export class CategoriesModule {}
