import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export { Authenticate } from './Authenticate';
export { Movie, MovieResponse } from './Movie';

@NgModule({
  imports: [CommonModule],
})
export class ModelsModule {}
