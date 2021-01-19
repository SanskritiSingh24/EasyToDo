import { Input, ViewChild } from '@angular/core';
import { Component, OnInit,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServices } from '../../user.services';
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
  //option:boolean=true;
  //@Output() optionEvent=new EventEmitter<boolean>();

  constructor(private userService:UserServices,private route:Router, private router:ActivatedRoute) { }

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
          //this.optionEvent.emit(this.option);
          this.userService.activateEmitter.next(true); //for login/logout
          this.route.navigate(['../','index',this.i],{relativeTo:this.router});
        }
        else
          this.message="Invalid password!";
      }
      else
        this.message="Invalid user!";
      this.i++;
    }
    //console.log(this.option);
  }
 
  onBack()
  {
    this.route.navigate(['/index']); //navigates to index page on clicking back button
  }


}
