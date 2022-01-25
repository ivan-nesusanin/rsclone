import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

const filmRoutes: Route[] = [
  { path: '', component: FilterCategoryComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(filmRoutes),
    HttpClientModule
  ],
  declarations: [
    FilterCategoryComponent
  ],
  exports: [
    FilterCategoryComponent
  ],
})
export class FilmModule {}
