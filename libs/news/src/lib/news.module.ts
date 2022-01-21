import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsHomePageComponent } from './news-home-page/news-home-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NewsHomePageComponent
  ],
  exports: [
    NewsHomePageComponent
  ],
})
export class NewsModule {}
