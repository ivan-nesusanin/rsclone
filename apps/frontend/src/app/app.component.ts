import { Component } from '@angular/core';

@Component({
  selector: 'clone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Clone Kinopoisk';
  headerMenu = ['Фильмы', 'Сериалы', 'Персоны', 'Рецензии', 'События'];
}
