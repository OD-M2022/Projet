import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { environment } from '../environments/environment'
import { User, UserProfile } from '../app/models/user'

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject: BehaviorSubject<User>
  public user: Observable<User>

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))
    this.user = this.userSubject.asObservable()
  }

  signUp ({email, password, role}: User): Observable<User> {
    const user = { email, password, role }
    return this.http.post<User>(`${environment.apiUrl}/signup`, user)
      .pipe(map((user: User) => user)
    )
  }

  getAll (filter: any = []): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users?filter=${JSON.stringify(filter)}`)
      .pipe(map((users: User[]) => users)
    )
  }

  createUserProfile (user: User, userProfile: UserProfile): Observable<UserProfile> {
    return this.http.post<UserProfile>(`${environment.apiUrl}/users/${user.id}/profile`, userProfile)
      .pipe(map((userProfile: UserProfile) => userProfile)
    )
  }

  updateProfile (userId: string, userProfile: UserProfile): Observable<UserProfile> {
    return this.http.patch<UserProfile>(`${environment.apiUrl}/users/${userId}/profile`, userProfile)
      .pipe(map((userProfile: UserProfile) => userProfile)
    )
  }

  upateUserProfileStatut (userId: string, statut: string): Observable<UserProfile> {
    return this.http.patch<UserProfile>(`${environment.apiUrl}/users/${userId}/profile`, {statut: statut})
      .pipe(map((userProfile: UserProfile) => userProfile)
    )
  }

  upateEditedFields (userId: string, editedFields: string, statut: string): Observable<UserProfile> {
    return this.http.patch<UserProfile>(`${environment.apiUrl}/users/${userId}/profile`, {editedFields: editedFields, statut: statut})
      .pipe(map((userProfile: UserProfile) => userProfile)
    )
  }

  getProfile (userId: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${environment.apiUrl}/users/${userId}/profile`)
      .pipe(map((user: UserProfile) => user)
    )
  }

  getwithoutCredentials (userProfile: UserProfile) {
    const { email, password, role, ...withoutCredentials }: any = userProfile;
    return withoutCredentials
  }
}
