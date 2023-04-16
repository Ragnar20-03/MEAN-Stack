import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TemplateComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
