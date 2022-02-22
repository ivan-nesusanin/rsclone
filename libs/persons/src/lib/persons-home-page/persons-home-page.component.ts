import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'clone-persons-home-page',
  templateUrl: './persons-home-page.component.html',
  styleUrls: ['./persons-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
