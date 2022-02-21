import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result.component';
import { Route, RouterModule } from '@angular/router';

export const searchResultRoutes: Route[] = [
  { path: 'search-result', component: SearchResultComponent },
];

@NgModule({
  declarations: [
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(searchResultRoutes)
  ],
  exports: [
    SearchResultComponent
  ],
})

export class SearchResultModule { }
