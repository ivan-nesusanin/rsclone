import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieId } from '@clone/models';
import { MovieService } from '@clone/services';

@Component({
  selector: 'clone-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MovieDetailComponent implements OnInit {
  public id = 0;
  public movieId: Partial<MovieId> = {};
  public age? = '';

  constructor(
    private readonly route: ActivatedRoute,
    private movieService: MovieService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // this.id = +this.route.snapshot.url[0].path;

    this.movieService.getMovieId(this.id).subscribe((response) => {
      this.movieId = response;
      this.cdr.detectChanges();
      // console.log(this.movieId);
      this.age = this.movieId.ratingAgeLimits?.slice(3);
      console.log(this.age)
      this.cdr.detectChanges();
    });

    // this.movieService.getMovieFromOurApi().subscribe((response) => {
    //   this.movieId = response;
    // console.log(this.movieId);
    //   this.cdr.detectChanges();
    // });
  }
}
