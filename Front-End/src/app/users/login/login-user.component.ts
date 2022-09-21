import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { Role } from '../../models/role';
import { User } from '../../models/user';
import { first } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})

export class LoginUserComponent {
  userForm: FormGroup;
  loading = false;
  submitted = false;
  error: boolean = false;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private authService: AuthService
  ) {
    this.userForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.loading = true;

    const { email, password } = this.userForm.value

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
      next: (userId) => this.setUser({...user, id: userId}),
      error: () => {
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
    this.authService.user.subscribe((user: User) => {
      if (user) {
        if (user.role === Role.User) {
          this.router.navigate([`profile/edit`]);
        } else if (user.role === Role.Admin) {
          this.router.navigate([`users/all`]);
        }
      }
    })
  }
}
