import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
// import { GenrePageComponent } from './genre-page/genre-page.component';
import { MainCategoriesComponent } from './main-categories/main-categories.component';

const categoriesRoutes: Route[] = [
  { path: '', component: MainCategoriesComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(categoriesRoutes)
  ],
  declarations: [
    // GenrePageComponent,
    MainCategoriesComponent
  ],
  exports: [
    // GenrePageComponent,
    MainCategoriesComponent
  ],
})
export class CategoriesModule {}
