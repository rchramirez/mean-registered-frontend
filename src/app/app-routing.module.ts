import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListEnrolledsComponent } from './components/list-enrolleds/list-enrolleds.component';
import { CreateEnrolledComponent } from './components/create-enrolled/create-enrolled.component';

const routes: Routes = [
  { path: '', component: ListEnrolledsComponent },
  { path: 'create-enrolled', component: CreateEnrolledComponent},
  { path: 'edit-enrolled/:id', component: CreateEnrolledComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
