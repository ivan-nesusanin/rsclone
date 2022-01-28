import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieId } from '@clone/models';
import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent implements OnInit {
  public id = 0
  public movieId: Partial<MovieId> = {};

  constructor(private readonly route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.url[0]);
    this.id = +this.route.snapshot.url[0].path;

    this.movieService.getMovieId(this.id).subscribe(response => {
      this.movieId = response;
      console.log(this.movieId.nameRu)
    })
  }
}
