import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfilePicturePageComponent} from "./profile-picture-page/profile-picture-page.component";

const routes: Routes = [
  {
    path: '',
    component: ProfilePicturePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
