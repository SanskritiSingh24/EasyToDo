import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './index/todo-list/todo-list.component';
import { TodoComponent } from './index/todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo:'/index', pathMatch:'full' },
  { path: 'index', component: IndexComponent,children:[
    { path: '', component: TodoListComponent },
    { path: 'todo', component:TodoComponent},
  //   { path: ':id/edit', component:RecipeEditComponent}
  ]},


  // { path: 'recipes', component: RecipesComponent,children:[
  //   { path: '', component: RecipeStartComponent },
  //   { path: 'new', component:RecipeEditComponent},
  //   { path: ':id', component:RecipeDetailComponent},
  //   { path: ':id/edit', component:RecipeEditComponent}

  // ] },


  { path:'about-us', component: AboutUsComponent },
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
