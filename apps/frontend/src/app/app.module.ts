import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
// import { authRoutes, AuthModule } from '@clone/auth';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([{ path: 'auth', children: authRoutes }], {
    //   initialNavigation: 'enabled', // initialNavigation: 'enabledBlocking',
    // }),
    // AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
