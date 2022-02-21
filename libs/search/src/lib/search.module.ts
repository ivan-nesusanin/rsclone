import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const searchRoutes: Route[] = [
  { path: '', component: AdvancedSearchComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AdvancedSearchComponent
  ],
  exports: [
    AdvancedSearchComponent
  ],
})
export class SearchModule {}
