import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path:'about-us',
    component: AboutUsComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
