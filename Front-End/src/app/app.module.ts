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
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { AllEmployeesComponent } from './employees/all-employees/all-employees.component';

enableProdMode();

const routes: Routes = [
  { path: '', redirectTo: 'profile/edit', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, canActivate: [LoginGuard] },
  { path: 'profile/edit', component: ProfileEditComponent , canActivate: [AuthGuard] },
  { path: 'employees/all-employees', component: AllEmployeesComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginPageComponent,
    ProfileEditComponent,
    AllEmployeesComponent,

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
