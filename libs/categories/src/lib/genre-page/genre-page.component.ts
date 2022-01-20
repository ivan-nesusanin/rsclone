import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'clone-genre-page',
  template: ` <p>genre-page works!</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenrePageComponent {}
