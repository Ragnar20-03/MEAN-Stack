import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';   // Import
import { MarvellousService } from './marvellous.service'; // Import

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    // Added
  ],
  providers: [MarvellousService],   // Added
  bootstrap: [AppComponent]
})
export class AppModule { }
