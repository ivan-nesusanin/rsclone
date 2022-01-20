import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { Route, RouterModule } from '@angular/router';

const homeRoutes: Route[] = [
  { path: '', component: HomePageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
})
export class HomeModule {}
