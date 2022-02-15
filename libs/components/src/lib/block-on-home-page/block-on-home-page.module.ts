import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockOnHomePageComponent } from './block-on-home-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BlockOnHomePageComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ],
  exports: [
    BlockOnHomePageComponent
  ]
})

export class BlockOnHomePageModule { }
