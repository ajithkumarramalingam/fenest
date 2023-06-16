import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotComponent,
    NewpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    PasswordModule,
    BrowserAnimationsModule,
    InputTextModule
   
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
