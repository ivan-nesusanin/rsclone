import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MovieId } from '@clone/models';
import { MovieService, SearchService } from '@clone/services';

@Component({
  selector: 'clone-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent implements OnInit {
  enterValueSubject = '';
  public movies: MovieId[] = [];

  constructor(private searchService: SearchService, public movieService: MovieService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.searchService.enterValueSubject.subscribe((enterValue: any) => {
      this.enterValueSubject = enterValue;
      console.log(this.enterValueSubject)
    })
    // this.movieService.getMovieFromOurApi().subscribe((res) => {
    //   this.movies = res;
    //   this.searchedMovie = this.movies.
    // });
  }
}


// arr.filter((item) => item.nameRu.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
