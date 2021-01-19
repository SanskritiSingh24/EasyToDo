import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserServices } from '../user.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  //userOption:boolean=false;
  //user:number;
  option=false;
  private activatedSub:Subscription;
  constructor(private userService:UserServices,private route:ActivatedRoute,private router:Router) { 
  }

  ngOnInit(){
    //this.option=this.userService.options;
    this.activatedSub=this.userService.activateEmitter.subscribe(didActivate=>{
      this.option=didActivate;
    })
    console.log("in header: ");
  }

  ngOnDestroy(){
    this.activatedSub.unsubscribe();
  }

  logout(){
    this.userService.activateEmitter.next(false);
    this.router.navigate(['index']);
  }

  //  loginCheck(b:boolean){
  //    this.userOption=b;
  //    console.log("in header: "+this.userOption);
  //  }
  
}
