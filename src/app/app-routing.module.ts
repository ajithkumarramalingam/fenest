import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'password', component: NewpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
