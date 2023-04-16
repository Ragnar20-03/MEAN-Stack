import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarvelousComponent } from './marvelous/marvelous.component';
import { InfosystemsComponent } from './infosystems/infosystems.component';
@NgModule({
  declarations: [
    AppComponent,
    MarvelousComponent,
    InfosystemsComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
