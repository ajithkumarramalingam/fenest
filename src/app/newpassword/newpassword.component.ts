import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.scss']
})
export class NewpasswordComponent {

  constructor(private service: ServiceService) { }

  password: string = '';
  confirmpassword: string = '';
  newpassword: any;

  newpass() {
    let email = localStorage.getItem('email');
    let body = {
      password: this.password,
      email: email
    }
   
    this.service.newpass(body).subscribe((data) => {
      this.newpassword=data;
     
    });
  }

}
