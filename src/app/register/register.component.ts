import { Component, DoCheck, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserServices } from '../user.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('register') signupForm:NgForm;
  genders=['Male','Female'];
  pwd="";
  i:boolean;
  text = ''; 

  constructor(private userService:UserServices, private route:Router) { }

  ngOnInit() {
   // console.log('Form changed!');
  }

  // ngOnChanges(){
  //   console.log('Form changed');
  // }

  // ngDoCheck(){
  //   console.log('Forms changed');
  // }

  onSubmit(){
      console.log(this.signupForm.value.email);
      const un=this.signupForm.value.email;
      const pwd=this.signupForm.value.password;
      const rpwd=this.signupForm.value.rpassword;
      const g=this.signupForm.value.gender;
      const c=this.signupForm.value.country;
      const newRegisteredUser=new User(un,pwd,rpwd,g,c);
      this.userService.addRegisteredUser(newRegisteredUser);
      this.route.navigate(['/index']);
        console.log(this.userService.showRegisteredUser());
     }

     onKeyUp(x) {   
      //this.text=this.pwd; 
      //this.text=x.target.value; 
      //this.i=this.pwd.length;
      //console.log(this.i);
      if(x.target.value==this.pwd ){
      //|| this.i==0){
        this.text="Passwords matched!";
        this.i=true;
        //this.i--;
      }else{
        this.text="Passwords do not match!";
        this.i=false;
      }
    }  
}