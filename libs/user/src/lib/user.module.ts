import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHomePageComponent } from './profile-home-page/profile-home-page.component';
import { DashboardHomePageComponent } from './dashboard-home-page/dashboard-home-page.component';
import { Route } from '@angular/router';

const movieRoutes: Route[] = [
  { path: 'movie', component: ProfileHomePageComponent },
];
@NgModule({
  imports: [CommonModule],
  declarations: [ProfileHomePageComponent, DashboardHomePageComponent],
  exports: [ProfileHomePageComponent, DashboardHomePageComponent],
})
export class UserModule {}
