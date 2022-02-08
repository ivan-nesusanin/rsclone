import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockOnHomePageComponent } from './block-on-home-page.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    BlockOnHomePageComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    BlockOnHomePageComponent
  ]
})

export class BlockOnHomePageModule { }
