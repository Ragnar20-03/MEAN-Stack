import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';

import {HttpClientModule} from '@angular/common/http';
import { MarvellousService } from './marvellous.service';
@NgModule({
  declarations: [
    AppComponent,
    BatchdetailsComponent,
    BatchlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MarvellousService],
  bootstrap: [AppComponent]
})
export class AppModule { }
