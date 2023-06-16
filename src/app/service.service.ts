import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'http://localhost:3000/register';
  constructor(private http: HttpClient) { }

 insert(body: any) {
    return this.http.post(this.url+ '/insert', body);
 }

  verifyToken(token: any){
    return this.http.put(this.url + '/verify',{token:token});
  }

  login(body: any){
    return this.http.post(this.url + '/login',body);
  }

  forgot(body: any){
    return this.http.post(this.url + '/forgot',body);
  }

  newpass(body: any){
    return this.http.put(this.url + '/reset',body);
  }
}
