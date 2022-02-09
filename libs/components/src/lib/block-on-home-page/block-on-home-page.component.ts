import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-block-on-home-page',
  templateUrl: './block-on-home-page.component.html',
  styleUrls: ['./block-on-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockOnHomePageComponent implements OnInit {
  p = 1;

  constructor(
    public movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieFromOurApi();
    this.movieService.filterByAge();
  }
}
