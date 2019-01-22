import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import {UserFormComponent } from './user-form/user-form.component';
const routes: Routes = [
  {path:"user",component:UserComponent},
  {path:"user-form",component:UserFormComponent},
  {path:"",redirectTo:"/user",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
