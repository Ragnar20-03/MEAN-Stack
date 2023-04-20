import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BatchesListComponent } from './batches-list/batches-list.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchService } from './batch.service'; // Import the required service

// Import httpclientmodule
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    BatchesListComponent,
    BatchDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule    // Add the name into import
  ],

  providers: [BatchService],  // Register name of our service
  bootstrap: [AppComponent]
})
export class AppModule { }
