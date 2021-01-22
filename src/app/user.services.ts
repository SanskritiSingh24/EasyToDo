import { Injectable,EventEmitter } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { User } from "./user.model";

@Injectable()
export class UserServices{

    private registeredUser: User[] =[
        new User('sanskriti@d.com','abc@123','abc@123','Female','India'),
        new User('varsha@d.com','test@123','test@123','Female','India')
      ];

      recentUser:number;
      
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
} 