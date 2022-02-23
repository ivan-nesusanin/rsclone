import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerialsPageComponent } from './serials-page/serials-page.component';
import { Route, RouterModule } from '@angular/router';

export const serialsRoutes: Route[] = [
  { path: '', component: SerialsPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(serialsRoutes),
  ],
  declarations: [
    SerialsPageComponent
  ],
  exports: [
    SerialsPageComponent
  ],
})
export class SerialsModule {}
