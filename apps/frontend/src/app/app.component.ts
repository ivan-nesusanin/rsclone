import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '@clone/services';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'clone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Clone Kinopoisk';
  searchValue = new FormControl('');

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchValue.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      (res) => {
        this.searchService.getEnterValue(res);
      }
    )
    this.searchService.getMoviesBase();
  }
}

