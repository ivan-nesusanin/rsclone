import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export { Authenticate } from './Authenticate';
export { /* Movie, MovieResponse, */ MovieId } from './Movie';
export { UserModel } from './User';

@NgModule({
  imports: [CommonModule],
})
export class ModelsModule {}
