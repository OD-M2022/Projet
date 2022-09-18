import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../../Services/auth.service';
import { Role } from '../../models/role';
import { User } from '../../models/user';
import { first } from 'rxjs';
import { EmployeesService } from 'src/Services/employees.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {
  authenticationForm: FormGroup;
  loading = false;
  submitted = false;
  error: boolean = false;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private authService: AuthService,
    private employeeService: EmployeesService,
    private location: Location
  ) {
    this.authenticationForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.authenticationForm.invalid) {
      return;
    }

    this.loading = true;

    const { email, password } = this.authenticationForm.value

    this.authService.login(email, password).pipe(first()).subscribe({
      next: (user: User) => this.identify(user),
      error: error => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  private identify (user: User) {
    this.authService.whoAmI(user).pipe(first()).subscribe({
      next: (userId: number) => this.setUser({...user, id: userId}),
      error: error => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  private setUser (user: User) {
    this.authService.setUser(user)
    this.redirect()
  }

  private redirect () {
    this.authService.user.subscribe(user => {
      if (user.role === Role.User) {
        this.router.navigate([`profile/edit`]);
      } else if (user.role === Role.Admin) {
        this.router.navigate([`employees/all-employees`]);
      }
    })
  }
}
