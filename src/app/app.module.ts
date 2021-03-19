import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { BreakpointsComponent } from './breakpoints/breakpoints.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BreakpointsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
