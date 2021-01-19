import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './header/about-us/about-us.component';
import { RegisterComponent } from './header/register/register.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './header/login/login.component';
import { TodoListComponent } from './index/todo-list/todo-list.component';
import { TodoComponent } from './index/todo/todo.component';
import { AccountComponent } from './header/account/account.component';

const routes: Routes = [
  { path: '', redirectTo:'/index', pathMatch:'full' },
  { path: 'index', component: IndexComponent,children:[
    { path: '', component: TodoListComponent },
    { path: ':id', component: TodoListComponent },
    { path: 'todo', component:TodoComponent},
  ]},


  // { path: 'recipes', component: RecipesComponent,children:[
  //   { path: '', component: RecipeStartComponent },
  //   { path: 'new', component:RecipeEditComponent},
  //   { path: ':id', component:RecipeDetailComponent},
  //   { path: ':id/edit', component:RecipeEditComponent}

  // ] },


  { path:'about-us', component: AboutUsComponent },
  { path:'account', component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];


@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
