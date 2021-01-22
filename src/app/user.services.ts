import { Injectable,EventEmitter } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { User } from "./user.model";

@Injectable()
export class UserServices{

    private registeredUser: User[] =[
        new User('sanskriti@d.com','abc@123','abc@123','Female','India'),
        new User('varsha@d.com','test@123','test@123','Female','India'),
        new User('varsha@ddd.com','test@123','test@123','Female','India')
      ];

      recentUser:number;
      flag:boolean;
      
    activateEmitter = new Subject<boolean>();   //for login/logout function  

    //to retrieve copy of user array
      showRegisteredUser(){
        return this.registeredUser.slice()
      }

    //to add user upon registration
      addRegisteredUser(newUser:User){
        this.registeredUser.push(newUser);
    }

    //return the id of the recent user logged in
    recentUserLogin(){
      return this.recentUser;
    }

    //return user details
      userDetails(id:number){
        return this.registeredUser[id];
      }

      //update user details
      updateUserDetails(updatedUser:User){
        this.registeredUser[this.recentUser]=updatedUser;
      }

      //delete user details
      deleteUserDetails(id:number){
        this.registeredUser.splice(id, 1); 
    }

    //update forgot password
    // updatePassword(id:number,pwd:string,rpwd:string){
    //   // const p=this.registeredUser[id].password;
    //   // const rp=this.registeredUser[id].repwd;
    //   if(this.registeredUser[id].password==pwd && this.registeredUser[id].repwd==rpwd)
    //     this.flag=false;  //passwords are the old ones hence no change
    //   else{
    //     this.registeredUser[id].password=pwd;
    //     this.registeredUser[id].repwd=rpwd;
    //     // if(this.registeredUser[id].password==pwd && this.registeredUser[id].repwd==rpwd)
    //         this.flag=true;  //password changed
    //     // else{
    //     //   this.registeredUser[id].password=p;
    //     //   this.registeredUser[id].repwd=rp;
    //     //   this.flag=false;
    //     // }
    //   }
    //   return this.flag;
    // }

    updatePassword(id:number,p:string,rp:string){
        console.log(id,p,rp);
        if(this.registeredUser[id].password==p && this.registeredUser[id].repwd==rp)
           return false;
        else{
        this.registeredUser[id].password=p;
        this.registeredUser[id].repwd=rp;
        console.log(this.registeredUser);
        return true;
        }
    }
} 