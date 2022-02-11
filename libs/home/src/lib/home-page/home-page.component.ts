import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent /* implements OnInit */ {

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieFromOurApi();
  }
}
