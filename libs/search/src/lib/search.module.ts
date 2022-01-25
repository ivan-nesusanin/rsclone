import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { Route, RouterModule } from '@angular/router';

const searchRoutes: Route[] = [
  { path: '', component: AdvancedSearchComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes),
  ],
  declarations: [
    AdvancedSearchComponent
  ],
  exports: [
    AdvancedSearchComponent
  ],
})
export class SearchModule {}
