import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HomePageService, MovieService } from '@clone/services';

@Component({
  selector: 'clone-home-page',
  templateUrl: './home-page.component.html',
  providers: [MovieService, HomePageService],
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

  constructor(
    public movieService: MovieService,
    // public homePageService: HomePageService
    ) {}

  ngOnInit(): void {
    this.movieService.getMovieFromOurApi();
    // this.homePageService.sortRating();
  }
}
