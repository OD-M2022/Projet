import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      if (this.authService.isLoggedIn) {


        const user = this.authService.userValue;

        // check if expired token

        // check if route is restricted by role
        if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
          // role not authorised so redirect to home page
          this.router.navigate(['login']);
          return false;
        }

        // authorised so return true
        return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['login'], { queryParams: { /*returnUrl: state.url */ } });
      return false;
    } catch (error) {
      console.log(error)
    }
  }

}
