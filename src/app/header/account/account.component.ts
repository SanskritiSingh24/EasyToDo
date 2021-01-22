import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user.model';
import { UserServices } from 'src/app/user.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild('account') accountForm:NgForm;
  pwd="";
  user:number;
  userLogged:User;
  edit:boolean;
  username:string;


  constructor(private userService:UserServices, private route:Router, private router:ActivatedRoute) { }

  //loads user id, user details
  ngOnInit() {
    this.user=this.userService.recentUser;
    this.userLogged=this.userService.userDetails(this.user);
    const username=this.userLogged.username;
    //console.log(username);
  }

  //updates user details
  onSubmit(){
      const un=this.accountForm.value.email;
      const pwd=this.userLogged.password;
      const rpwd=this.userLogged.repwd;
      const g=this.accountForm.value.gender;
      const c=this.accountForm.value.country;
      const newRegisteredUser=new User(un,pwd,rpwd,g,c);
      this.userService.updateUserDetails(newRegisteredUser);
      //console.log(un);
      //console.log(this.userLogged.username);
      if(un!=this.username){
        this.userService.activateEmitter.next(false);
        this.route.navigate(['/login'],{relativeTo:this.router});
      }
      else{
        this.route.navigate(['/index',this.user],{relativeTo:this.router});
      }
  }
  
  //editing enabling
  onEdit(){
    this.edit=true;
  }

  //delete user details from record
  onDelete(){
    this.userService.deleteUserDetails(this.user);
    this.userService.activateEmitter.next(false);
    this.route.navigate(['/index'],{relativeTo:this.router});
  }
  
}
