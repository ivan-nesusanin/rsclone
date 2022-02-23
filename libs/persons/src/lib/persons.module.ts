import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsHomePageComponent } from './persons-home-page/persons-home-page.component';
import { Route, RouterModule } from '@angular/router';

export const personsRoutes: Route[] = [
  { path: '', component: PersonsHomePageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(personsRoutes)
  ],
  declarations: [
    PersonsHomePageComponent
  ],
  exports: [
    PersonsHomePageComponent
  ],
})
export class PersonsModule {}
