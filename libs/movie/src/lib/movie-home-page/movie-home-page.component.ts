import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'clone-movie-home-page',
  templateUrl: './movie-home-page.component.html',
  styleUrls: ['./movie-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
