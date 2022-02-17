import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
// import { authRoutes, AuthModule } from '@clone/auth';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SearchPipe } from 'libs/pipes/src/lib/search.pipe';

@NgModule({
  declarations: [
    AppComponent
    // SearchPipe
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([{ path: 'auth', children: authRoutes }], {
    //   initialNavigation: 'enabled', // initialNavigation: 'enabledBlocking',
    // }),
    // AuthModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
