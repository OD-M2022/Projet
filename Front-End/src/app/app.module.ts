import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { JwtInterceptor } from '../Services/jwt.interceptor';
import { ErrorInterceptor } from '../Services/error.interceptor';
import { AuthGuard } from "../Services/auth.guard"
import { LoginGuard } from "../Services/login.guard"
import { Role } from "./models/role"

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddUserComponent } from './users/add/add-user.component';
import { EditUserComponent } from './users/edit/edit-user.component';
import { AllUsersComponent } from './users/all/all-users.component';
import { UserPipe } from './pipes/user.pipe';
import { ViewUserComponent } from './users/view/view-user.component';
import { LoginUserComponent } from './users/login/login-user.component';

enableProdMode();

const routes: Routes = [
  { path: '', redirectTo: 'profile/edit', pathMatch: 'full' },
  //
  { path: 'login', component: LoginUserComponent , canActivate: [LoginGuard] },
  { path: 'users/all', component: AllUsersComponent , canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'users/add', component: AddUserComponent , canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'users/edit/:id', component: EditUserComponent , canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'users/view/:id', component: ViewUserComponent , canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'profile', component: ViewUserComponent , canActivate: [AuthGuard] },
  { path: 'profile/edit', component: EditUserComponent , canActivate: [AuthGuard] },
  //  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    //
    UserPipe,
    LoginUserComponent,
    AddUserComponent,
    EditUserComponent,
    AllUsersComponent,
    ViewUserComponent,
    //
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgSlimScrollModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ErrorInterceptor, 
      multi: true 
    },

    {
      provide: SLIMSCROLL_DEFAULTS,
      useValue: {
        alwaysVisible : false
      }
    }
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
