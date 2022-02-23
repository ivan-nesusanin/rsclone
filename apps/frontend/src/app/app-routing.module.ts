import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@clone/home').then((m) => m.HomeModule),
  },
  {
    path: 'search',
    loadChildren: () => import('@clone/search').then((m) => m.SearchModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('@clone/auth').then((m) => m.AuthModule),
  },
  {
    path: 'user',
    loadChildren: () => import('@clone/user').then((m) => m.UserModule),
  },
  {
    path: 'movie',
    loadChildren: () => import('@clone/movie').then((m) => m.MovieModule),
  },
  {
    path: 'serials',
    loadChildren: () => import('@clone/serials').then((m) => m.SerialsModule),
  },
  {
    path: 'news',
    loadChildren: () => import('@clone/news').then((m) => m.NewsModule),
  },
  {
    path: 'persons',
    loadChildren: () => import('@clone/persons').then((m) => m.PersonsModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
