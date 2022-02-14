import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'clone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Clone Kinopoisk';
  headerMenu = ['Фильмы', 'Сериалы', 'Персоны', 'Рецензии', 'События'];
  searchValue = new FormControl('');

  ngOnInit(): void {
      this.searchValue.valueChanges.pipe(
        debounceTime(1500)
      ).subscribe(
        (res) => console.log('FC', res)
      )
  }
}
