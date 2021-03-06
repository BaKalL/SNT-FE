import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private route: Router
  ) {

  }

  url = 'http://localhost:8080/user/login'


  login(credentials): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
    return this.http.post(this.url,credentials,httpOptions).pipe();
  }

  logout () {
    localStorage.clear();
    this.route.navigate(['login']);
  }
  
  testCookie() {
    
  }
}
