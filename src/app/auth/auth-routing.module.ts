import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostListComponent } from '../posts/post-list/post-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: PostListComponent}
];

@NgModule({
  imports: [
   RouterModule.forChild(routes), LoginComponent

  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
