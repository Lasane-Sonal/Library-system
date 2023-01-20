import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userloginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:'',component:userloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
