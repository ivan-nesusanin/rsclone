import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { authRoutes, AuthModule } from '@clone/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'auth', children: authRoutes }], {
      initialNavigation: 'enabled', // initialNavigation: 'enabledBlocking',
    }),
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
