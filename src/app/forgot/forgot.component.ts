import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
  email: string = '';

  constructor(private service: ServiceService) { }

  forgot() {
    let body = {
      email: this.email
    }
    localStorage.setItem('email',this.email);
    this.service.forgot(body).subscribe((data) => {
      console.log(data);
    });

}
}
