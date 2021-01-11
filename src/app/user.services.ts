import { User } from "./user.model";

export class UserServices{

    private registeredUser: User[] =[
        new User('sanskriti@d.com','abc@123','abc@123','Female','India'),
        new User('varsha@d.com','test@123','test@123','Female','India')
      ];

      showRegisteredUser(){
        return this.registeredUser.slice()
      }

      addRegisteredUser(newUser:User){
        this.registeredUser.push(newUser);
    }
}