import { Injectable,EventEmitter } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { User } from "./user.model";

@Injectable()
export class UserServices{

    private registeredUser: User[] =[
        new User('sanskriti@d.com','abc@123','abc@123','Female','India'),
        new User('varsha@d.com','test@123','test@123','Female','India')
      ];
      
    activateEmitter = new Subject<boolean>();   //for login/logout function  

    //to retrieve copy of user array
      showRegisteredUser(){
        return this.registeredUser.slice()
      }

    //to add user upon registration
      addRegisteredUser(newUser:User){
        this.registeredUser.push(newUser);
    }
} 