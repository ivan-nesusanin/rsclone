import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlockOnHomePageComponent } from './block-on-home-page/block-on-home-page.component';
import { BlockOnHomePageModule } from './block-on-home-page/block-on-home-page.module';

@NgModule({
  imports: [
    CommonModule,
    BlockOnHomePageModule,
    RouterModule
  ],
  exports: [
    BlockOnHomePageComponent
  ],
})
export class ComponentsModule {}
