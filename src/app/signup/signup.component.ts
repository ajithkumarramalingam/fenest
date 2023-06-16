import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  signup: any;

  constructor(private service: ServiceService) { }

  insert() {
    let body = {
      name: this.name,
      email: this.email,
      password: this.password
    }
    this.service.insert(body).subscribe((data) => {
      this.signup=data;
      if(this.signup.status==200){
        alert(this.signup.message);
      }
      else{
        alert(this.signup.message);
      }
    });
  }

}
