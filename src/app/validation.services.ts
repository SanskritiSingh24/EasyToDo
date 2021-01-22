import { Injectable,EventEmitter } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { User } from "./user.model";

@Injectable()
export class ValidationServices{
    flag:boolean;
    j=0;
    capLetters=0;
    smallLetters=0;
    num=0;
    character='';
    specialLetters=0;

    passwordValidation(pwd:string) { 
        //checking the password strength  
        if(pwd.length<8)
          this.flag=false;
        else{
              while(this.j<pwd.length){
                   this.character=pwd[this.j];
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
                              if(this.character==pwd[this.j].toUpperCase()){
                                this.capLetters+=1;
                               // console.log(this.character,this.capLetters);
                              }
                              if(this.character==pwd[this.j].toLowerCase()){
                                  this.smallLetters++;
                                 // console.log(this.smallLetters);
                              }
                              // console.log(this.capLetters);
                         }
                    }
               this.j++;
           }
           if(this.capLetters==0 || this.smallLetters==0 || this.num==0 || this.specialLetters==0){
               this.flag=false;
           }
          // console.log(this.capLetters,this.smallLetters,this.num,this.specialLetters);
        }
        //end of passsword strength checking
        return this.flag;
    }
} 