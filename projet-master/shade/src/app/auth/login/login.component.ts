import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
@ViewChild('f') loginForm:NgForm;
private _User={email:null,password:null};

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  
  loginUser(){
    this._User.email = this.loginForm.value.email;
    this._User.password = this.loginForm.value.password;
    this.authService.loginUser(this._User)
      .subscribe(
        res=>{
          localStorage.setItem('token',res.token);
          this.router.navigate(['/home']); 
        },
        err=>console.log("Error occured unable to login,Try Again!!!")
      );
  }
}
