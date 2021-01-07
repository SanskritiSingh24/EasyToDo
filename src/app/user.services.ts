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
// const arr: MyArrayType = [
//     {id: 1, text: 'Sentence 1'},
//     {id: 2, text: 'Sentence 2'},
//     {id: 3, text: 'Sentence 3'},
//     {id: 4, text: 'Sentenc4 '},
// ];
  

//   setToInactive(id: number) {
//     this.inactiveUsers.push(this.activeUsers[id]);
//     this.activeUsers.splice(id, 1);
//   }

//   setToActive(id: number) {
//     this.activeUsers.push(this.inactiveUsers[id]);
//     this.inactiveUsers.splice(id, 1);
//   }


}