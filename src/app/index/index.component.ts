import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user.model';
import { UserServices } from '../user.services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user:number;

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //const user = this.route.snapshot.params['name'];
    this.route.params.subscribe(
      (params:Params)=>{
        this.user = +params['id'];
      }
    );
  }

  // register(){
  //   this.router.navigate(['register'],{relativeTo:this.route});
  // }

  // showEvents(){
  //   this.router.navigate(['modal'],{relativeTo:this.route});
  // }

}
