import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServices } from '../user.services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // register(){
  //   this.router.navigate(['register'],{relativeTo:this.route});
  // }

  showEvents(){
    this.router.navigate(['modal'],{relativeTo:this.route});
  }

}
