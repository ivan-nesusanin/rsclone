import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'categories', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('@clone/home').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('@clone/auth').then((m) => m.AuthModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('@clone/categories').then((m) => m.CategoriesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
