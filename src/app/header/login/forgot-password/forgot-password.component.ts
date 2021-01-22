import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user.model';
import { UserServices } from 'src/app/user.services';
import { ValidationServices } from 'src/app/validation.services';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild ('forgotPassword') passwordForm:NgForm;
  hide = true;
  //users:User;
  i:number=0;
  message="";
  flag:boolean;
  pwd="";
  text="";
  c:boolean;
  res:boolean;
  npwd:string;
  nrpwd:string;

  constructor(private route:Router,private router:ActivatedRoute,
     private userService:UserServices, private valid:ValidationServices) { }

  ngOnInit(){
    // const users=this.userService.showRegisteredUser();
    // console.log(users);
    // console.log("hi");
  }

  onSubmit(){
    //console.log(this.passwordForm.value);
    const un=this.passwordForm.value.email;
    //console.log(un);
     const users=this.userService.showRegisteredUser();
     //console.log(users);
    const l=users.length;
    //console.log(l);
    while(this.i<l){
      if(users[this.i].username==un){
        //console.log(this.passwordForm.value);
         //update password
         this.npwd=this.passwordForm.value.newpassword;
         this.nrpwd=this.passwordForm.value.newrepassword;
         //console.log(this.npwd,this.nrpwd);
         const flag=this.userService.updatePassword(this.i,this.npwd,this.nrpwd);
         //console.log(flag);
          if(flag==true){
             alert('Password updated successfully!');
             //console.log(this.userService.showRegisteredUser());
             this.route.navigate(['../'],{relativeTo:this.router});
            }
         else{
             this.message="Could not update password! Try again.";
             this.passwordForm.reset();
      //       //this.ngOnInit();
          }
        }
      //  else{
      //     this.message="Invalid username!"; //display user not found error
      //    //this.passwordForm.reset();
      //     }
        this.i++;
        } 
  }

  onBack(){
    this.route.navigate(['../'],{relativeTo:this.router});

  }


  //checking if password and confirm password matches
  onKeyUp(x){
    this.res=this.valid.passwordValidation(this.pwd);
    if(this.res==false)
        alert('Password should be minimum 8 characters and must contain 1 numeric, 1 special, 1 upper and 1 lower case letter!');
    else{
        if(x.target.value==this.pwd ){
            this.c=true;
            this.text="Passwords matched!";
            if(this.c==true){setTimeout(()=> {
              this.text="";
            },2000);
        }
        }else{
            this.text="Passwords do not match!";
            this.c=false;
          }
       }
    }
}
