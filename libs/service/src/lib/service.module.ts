import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './movie.service';

@NgModule({
  imports: [CommonModule],
  exports: [MovieService],
})
export class ServiceModule {}
