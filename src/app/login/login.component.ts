import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  token: any;
  logindata: any;
  email: string = '';
  password: string = '';
  constructor(private service: ServiceService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
       this.verifyToken(); 
  }
    verifyToken(){
      // let token = this.route.snapshot.paramMap.get("token")
      this.route.queryParams.subscribe(params => { 
        console.log(params['token'],"client token");
        const token = params['token'];
        this.service.verifyToken(token).subscribe((data) => {
          console.log(data);
        });
      })     
}

  login(){
    let body = {
      email:this.email,
      password:this.password
    };
    this.service.login(body).subscribe((data) => {
      this.logindata=data;
      console.log(this.logindata);
    });
      // if(this.token.token){
      //   localStorage.setItem('token',this.token.token);
      //   this.router.navigate(['/home']);
      // }
      // else{
      //   alert(this.token.message);
      // }
    }


}
