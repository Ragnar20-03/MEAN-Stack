import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';




@NgModule({
  declarations: [
    AdminDetailsComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdminDetailsComponent,
    AdminLoginComponent
  ]
})
export class AdminModule { }
