import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServices } from '../user.services';
import { HttpBackend } from '@angular/common/http';
import { Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild ('login') loginForm:NgForm;
  i=0;
  bypassLogin=false;
  hide = true;
  message="";
  //@Output() options:boolean;

  constructor(private userService:UserServices,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
     console.log(this.loginForm);


    //checking the credentials
    const un=this.loginForm.value.email;
    const pwd=this.loginForm.value.password;
    const userArray=this.userService.showRegisteredUser();
    const l=userArray.length;
    while(this.i<l){
      if(userArray[this.i].username==un){
        if(userArray[this.i].password==pwd){
          this.bypassLogin=true;
          this.route.navigate(['/index']);
          //this.options=true;
        }
        else
          this.message="Invalid password!";
      }
      else
        this.message="Invalid user!";
      this.i++;
    }

  }

  onBack()
  {
    this.route.navigate(['/index']); //navigates to index page on clicking back button
  }


}
