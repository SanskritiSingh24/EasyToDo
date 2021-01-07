import { User } from "./user.model";

export class UserServices{

    private registeredUser: User[] =[
        new User('abc@d.com','abc@123','abc@123','Male','A'),
        new User('test@d.com','test@123','test@123','Male','A')
      ];

      showRegisteredUser(){
        return this.registeredUser.slice()
      }

      addRegisteredUser(newUser:User){
        this.registeredUser.push(newUser);
    }
}