import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { environment } from '../environments/environment'
import { User } from '../app/models/user'

@Injectable({ providedIn: 'root' })
export class AuthService {
    private userSubject: BehaviorSubject<User>
    public user: Observable<User>

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))
        this.user = this.userSubject.asObservable()
    }

    get userValue(): User {
        return this.userSubject.value
    }

    get isLoggedIn(): boolean {
      let user = localStorage.getItem('user')
      return user !== null ? true : false
    }

    getToken(): string {
      return this.userValue.token
    }

    login(email: string, password: string): Observable<User> {
      return this.http.post<User>(`${environment.apiUrl}/users/login`, { email, password })
        .pipe(map((user: User) => user)
      )
    }

    whoAmI ({ token }: User): Observable<any>  {
      const headers = { headers: new HttpHeaders().set('Authorization', `Bearer ${ token }`) }
      return this.http.get(`${environment.apiUrl}/whoAmI`, headers)
        .pipe(map((userId: number) => userId))
    }

    setUser (user: User): User {
      localStorage.setItem('user', JSON.stringify(user))
      this.userSubject.next(user)
      return user
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user')
        this.userSubject.next(null)
        this.router.navigate(['login'])
    }
}
