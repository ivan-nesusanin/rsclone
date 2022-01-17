import { Component, OnInit } from '@angular/core';
import { Authenticate } from '@clone/models';

@Component({
  selector: 'clone-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  login(authenticate: any) {
    console.log(authenticate);
  }
}
