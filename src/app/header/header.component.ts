import { Component, Input, OnInit } from '@angular/core';
import { UserServices } from '../user.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Input('options') option:boolean;
  //option="";

  constructor(private userService:UserServices) { 
    //this.option=this.userService.editOptions();
  }

  ngOnInit(){
   // this.option=this.userService.editOptions();
    //console.log("in header: " +this.option);
  }

  
}
