import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export { Authenticate } from './Authenticate';
export { /* Movie, MovieResponse, */ MovieId } from './Movie';
export { UserModel } from './User';
export { CategoryModel } from './Category';

@NgModule({
  imports: [CommonModule],
})
export class ModelsModule {}
