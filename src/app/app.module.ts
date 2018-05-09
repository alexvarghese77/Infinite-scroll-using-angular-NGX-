import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ApicallsService} from './apicalls.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    HttpModule
  ],
  providers: [ApicallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
