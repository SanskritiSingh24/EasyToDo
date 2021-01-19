import { Component, DoCheck, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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


  onKeyUp(x) { 
    //checking the password strength  
    if(this.pwd.length<8)
      alert('Password should be minimum 8 characters!');
    else{
          while(this.j<this.pwd.length){
               this.character=this.pwd[this.j];
               //console.log(this.character);
               if (this.character.match('[0-9]')){
                  // alert('character is numeric');
                  this.num++;
                  //console.log(this.num);
                  //[$-/:-?{-~!"^_@`\[\]]
               }else{
                   if(this.character.match('[-@_"$:]')){
                      this.specialLetters++;
                      //console.log(this.character,this.specialLetters);
                    }else{
                          if(this.character==this.pwd[this.j].toUpperCase()){
                            this.capLetters+=1;
                           // console.log(this.character,this.capLetters);
                          }
                          if(this.character==this.pwd[this.j].toLowerCase()){
                              this.smallLetters++;
                             // console.log(this.smallLetters);
                          }
                          // console.log(this.capLetters);
                     }
                }
           this.j++;
       }
       if(this.capLetters==0 || this.smallLetters==0 || this.num==0 || this.specialLetters==0){
             alert('Password should contain atleast 1 uppercase, 1 lowercase, 1 numeric and 1 special character - @ _ " $ or :');     
        }
       console.log(this.capLetters,this.smallLetters,this.num,this.specialLetters);
    }
    //end of passsword strength checking


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


  showPassword(){ }

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