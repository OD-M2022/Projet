import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

import { AuthService } from '../../../Services/auth.service';
import { Role } from '../../models/role';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {
  authenticationForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private authService: AuthService,
    private location: Location
  ) {
    this.authenticationForm = this.fb.group({
      email: ['', Validators.email ],
      password: ['', Validators.required ],
    });
  }

  authenticate() {
    // stop here if form is invalid
     if (this.authenticationForm.invalid) {
         return;
     }

    this.authService.authenticate(this.authenticationForm.value);
    this.authService.user.subscribe(user => {
      if (user) {
        if (user.role === Role.User) {
          this.router.navigate([`profile/edit`]);
        } else if (user.role === Role.Admin) {
          this.router.navigate([`employees/all-employees`]);
        }
      }
    })
  }

}
