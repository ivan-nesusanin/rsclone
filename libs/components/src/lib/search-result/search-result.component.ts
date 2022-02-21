import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { MovieId } from '@clone/models';
import { MovieService, SearchService } from '@clone/services';

@Component({
  selector: 'clone-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent implements OnInit, DoCheck {
  public enterValue = '';
  public movies: MovieId[] = [];
  public searchResult: MovieId[] = [];


  constructor(
    public searchService: SearchService,
    public movieService: MovieService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.movieService.getMovieFromOurApi().subscribe((res) => {
      this.movies = res;
    });
    this.searchService.enterValueSubject.subscribe((enterValueFromService: any) => {
      this.enterValue = enterValueFromService;
      // console.log(this.enterValue)
    });
    this.searchOnSearchPage();
    this.searchResult = this.searchService.searchMovies()
    // console.log(this.searchResult)
  }

  ngDoCheck(): void {
    this.searchOnSearchPage();
    this.cdr.detectChanges()
  }

  searchOnSearchPage() {
    if (this.enterValue !== '') {
      this.searchResult = this.movies.filter((item) => {
        return item.nameRu.toLocaleLowerCase().includes(this.enterValue.toLocaleLowerCase())
      })
    }
    // console.log(this.searchResult)
  }
}
