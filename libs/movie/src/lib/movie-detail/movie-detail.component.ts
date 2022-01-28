import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'clone-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent implements OnInit {
  public id = 0

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.url[0]);
    this.id = +this.route.snapshot.url[0].path;
  }
}
