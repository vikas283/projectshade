import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') signupForm:NgForm;
  private _User={email:null,password:null};
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  registerUser(){
    this._User.email = this.signupForm.value.email;
    this._User.password = this.signupForm.value.password;
    this.authService.registerUser(this._User)
      .subscribe(
        res=>localStorage.setItem('token',res.token),
        err=>console.log("Error occured unable to register,Try Again!!!")
      );
   this.router.navigate(['/home']);
  }
}
