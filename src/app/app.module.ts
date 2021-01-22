import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './header/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AboutUsComponent } from './header/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { UserServices } from './user.services';
import { EventsComponent } from './index/events/events.component';
import { TodoListComponent } from './index/todo-list/todo-list.component';
import { TodoComponent } from './index/todo/todo.component';
import { AccountComponent } from './header/account/account.component';
import { ForgotPasswordComponent } from './header/login/forgot-password/forgot-password.component';
import { ValidationServices } from './validation.services';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutUsComponent,
    RegisterComponent,
    EventsComponent,
    TodoListComponent,
    TodoComponent,
    AccountComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    
  ],
  providers: [UserServices,ValidationServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
