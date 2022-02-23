import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsHomePageComponent } from './news-home-page/news-home-page.component';
import { Route, RouterModule } from '@angular/router';

export const newsRoutes: Route[] = [
  { path: '', component: NewsHomePageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(newsRoutes)
  ],
  declarations: [
    NewsHomePageComponent
  ],
  exports: [
    NewsHomePageComponent
  ],
})
export class NewsModule {}
