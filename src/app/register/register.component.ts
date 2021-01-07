import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('f') signupForm:NgForm;
  genders=['Male','Female'];

  constructor(private userService:UserServices, private route:Router) { }

  ngOnInit(): void {
  }

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
      //this.ingredientAdded.emit(newIngredient);
        console.log(this.userService.showRegisteredUser());
     }
}