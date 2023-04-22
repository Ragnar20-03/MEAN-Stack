import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';




@NgModule({
  declarations: [


    StaffLoginComponent,
    StaffDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StaffDetailsComponent,
    StaffLoginComponent
  ]
})
export class StaffModule { }
