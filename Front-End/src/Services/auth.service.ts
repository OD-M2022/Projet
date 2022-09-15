import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { User } from '../app/models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    get userValue(): User {
        return this.userSubject.value;
    }

    get isLoggedIn(): boolean {
      let user = localStorage.getItem('user');
      return user !== null ? true : false;
    }

    getToken() {
      return this.userValue.token
    }

    authenticate(user: User) {
      return this.http.post<User>(`${environment.apiUrl}/users/login`, user).
        subscribe((token: any) => {
          // set header Authorization
          const headers = { headers: new HttpHeaders().set('Authorization', `Bearer ${ token.token }`) }
          // get user id
          this.http.get(`${environment.apiUrl}/whoAmI`, headers).subscribe((id: string) => {
            // get user role
            this.http.get(`${environment.apiUrl}/employees`, headers).subscribe((result: any) => {
              const profil = result.filter((p) => Number(id) === Number(p.UserId))[0]
              if (profil) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                const user: User = {token: token.token, id: id, role: profil.Role}
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
              } else {
                throw Error('User does not exist or has no Role')
              }
            })
          });
        })
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['login']);
    }
}
