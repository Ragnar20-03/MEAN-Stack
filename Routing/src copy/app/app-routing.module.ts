import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from 'src/app/first/first.component';
import { SecondComponent } from 'src/app/second/second.component';
import { ThirdComponent } from 'src/app/third/third.component';

const routes: Routes = [
    {path:'first' , component : FirstComponent},
    {path:'second' , component : SecondComponent},
    {path:'third' , component : ThirdComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
