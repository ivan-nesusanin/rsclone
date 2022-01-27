import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
// import { authRoutes, AuthModule } from '@clone/auth';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([{ path: 'auth', children: authRoutes }], {
    //   initialNavigation: 'enabled', // initialNavigation: 'enabledBlocking',
    // }),
    // AuthModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
