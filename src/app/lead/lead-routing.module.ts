import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadAddComponent } from './lead-add/lead-add.component';
import { LeadDetailsComponent } from './lead-details/lead-details.component';

const routes: Routes = [
  {
    path: "addlead",
    component: LeadAddComponent
  },
  {
    path: "leaddetails",
    component: LeadDetailsComponent
  },
  {
    path: '',
    redirectTo: 'addlead',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
