import { Component, OnInit } from '@angular/core';
import { Authenticate } from '@clone/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  login(authenticate: Authenticate) {
    console.log(authenticate);
  }
}
