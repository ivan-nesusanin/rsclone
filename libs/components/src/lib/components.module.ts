import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockOnHomePageComponent } from './block-on-home-page/block-on-home-page.component';
import { BlockOnHomePageModule } from './block-on-home-page/block-on-home-page.module';
import { SearchResultModule } from './search-result/search-result.module';

@NgModule({
  imports: [
    CommonModule,
    BlockOnHomePageModule,
    SearchResultModule
  ],
  exports: [
    BlockOnHomePageComponent
  ],
  declarations: [],
})
export class ComponentsModule {}
