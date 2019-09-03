
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  helper = new JwtHelperService();

  constructor(
    private http: Http,
    private router: Router
  ) { }

  loginUser(user) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/login', user);
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('gcrToken');
    window.location.reload();
    this.router.navigate(['']);
  }

  isLogged() {
    if (localStorage.getItem('token') == null) {
      return false;
    } else {
      return true;
    }
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return null;

    return this.helper.decodeToken(token);
  }

  adminLogin(user) {
    return this.http.post('http://localhost:3000/adminLogin', user);
  }


  verifyEmail(p) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/verify', p);
  }


}
