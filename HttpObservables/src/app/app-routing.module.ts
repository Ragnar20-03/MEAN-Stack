import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchListComponent } from './batch-list/batch-list.component';

const routes: Routes = [
  {path:'details' , component:BatchDetailsComponent},
  {path:'batchlist', component:BatchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
