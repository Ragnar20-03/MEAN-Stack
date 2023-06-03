import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'' , component:EventsComponent
  },
  {
    path:'events' , component:EventsComponent
  },
  {
    path:'specialEvents' , component:SpecialEventsComponent
  },
  {
    path:'register' , component : RegisterComponent
  },
  {
    path:'login' , component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
