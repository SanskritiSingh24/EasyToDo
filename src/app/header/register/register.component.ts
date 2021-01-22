import { Component, DoCheck, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationServices } from 'src/app/validation.services';
import { User } from '../../user.model';
import { UserServices } from '../../user.services';

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
  hide = true;
  j=0;
  capLetters=0;
  smallLetters=0;
  num=0;
  character='';
  specialLetters=0;
  res:boolean;

  constructor(private userService:UserServices, private route:Router, private valid:ValidationServices) { }

  ngOnInit() {
   // console.log('Form changed!');
  }

  // ngOnChanges(){
  //   console.log('Form changed');
  // }

  // ngDoCheck(){
  //   console.log('Forms changed');
  // }


  onKeyUp(x) { 
    //checking the password strength  
    this.res=this.valid.passwordValidation(this.pwd);
    if(this.res==false)
        alert('Password should be minimum 8 characters and must contain 1 numeric, 1 special, 1 upper and 1 lower case letter!');
    else{
        //checking if password and confirm password matches
        if(x.target.value==this.pwd ){
          this.i=true;
          this.text="Passwords matched!";
          if(this.i==true){setTimeout(()=> {
            this.text="";
          },2000);}
        }else{
          this.text="Passwords do not match!";
          this.i=false;
        }
      }
  //end of password matching
  }

  //form submission
  onSubmit(){
      console.log(this.signupForm);
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
     //end of form submission
    
     //to clear and reset form using cancel
    clearForm(){
      this.signupForm.reset();
      this.text="";
    }
    //end of resetting
}