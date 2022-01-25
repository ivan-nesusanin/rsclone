import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'clone-profile-home-page',
  templateUrl: './profile-home-page.component.html',
  styleUrls: ['./profile-home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileHomePageComponent {}
