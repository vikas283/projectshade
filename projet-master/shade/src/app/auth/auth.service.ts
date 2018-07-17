import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _register_url = 'http://localhost:8000/api/register';
  private _login_url = 'http://localhost:8000/api/login';

  constructor(private http:HttpClient,private router:Router) { }

  registerUser(User){
    return this.http.post<any>(this._register_url,User);
  }

  loginUser(User){
    return this.http.post<any>(this._login_url,User);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
