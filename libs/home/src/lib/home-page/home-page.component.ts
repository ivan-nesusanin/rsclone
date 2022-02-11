import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { MovieId } from '@clone/models';
import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  public topMovie: MovieId[] = [];

  constructor(public movieService: MovieService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.movieService.getMovieFromOurApi().subscribe(
      (res) => {
        console.log('res!!!', res)
        this.topMovie = (res).sort(
          (a, b) => b.ratingKinopoisk - a.ratingKinopoisk).slice(0, 100);
        this.cdr.detectChanges()
      }
    )
  }
}
