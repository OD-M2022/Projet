import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/Services/user.service';
import { first } from 'rxjs';
import { USER_PROFILE_STATUT, UserItem, UserStatut, UserProfile } from 'src/app/models/user';
import { AuthService } from 'src/Services/auth.service';
import { Role } from 'src/app/models/role';


@Component({
  selector: 'app-user-all',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})

export class AllUsersComponent implements OnInit {
  userForm: FormGroup;
  users: UserItem[] = []
  profileStatut: Object[] = USER_PROFILE_STATUT
  filterStatut: string = ''
  allSelected: boolean = false
  selectedUsers: UserItem[] = []
  loading: boolean = false
  error: boolean = false

  constructor(public fb: FormBuilder, private userService: UserService, private authService: AuthService) {
    this.userForm = this.fb.group({
      statut: ['', Validators.required]
    });
  }

  get disabled () {
    return this.userForm.invalid || this.loading || (!this.selectedUsers.length && !this.allSelected)
  }

  ngOnInit() {
    const condition = {
      where: { role: Role.User },
      fields: ['id', 'email', 'role'],
      include: ['profile']
    }

    this.userService.getAll(condition).pipe(first()).subscribe({
      next: (users: UserItem[]) => {
        this.users = users.map(user => new UserItem(user.id, user.email, user.role, user.profile, false))
      },
      error: error => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  onFilterChange(value: string) {
    this.filterStatut = value
  }

  checkUncheckAll(event: Event) {
    const eventTarget = (event.target as HTMLInputElement)
    this.allSelected = eventTarget.checked
    this.users.forEach((user: UserItem) => user.selected = eventTarget.checked)
  }

  onCheckbox(event: Event) {
    const eventTarget = (event.target as HTMLInputElement)

    this.users.forEach((user: UserItem) => {
      if (user.id === eventTarget.value) {
        return user.selected = eventTarget.checked
      }
    })

    this.selectedUsers = this.users.filter((user: UserItem) => user.selected === true)
    this.allSelected = this.users.length === this.selectedUsers.length
  }

  getStatut(statut: string): string {
    return this.profileStatut.filter((element: UserStatut) => element.value === statut)[0]['name']
  }

  updateStatut () {
    const selectedUsers = this.users.filter((user: UserItem) => user.selected)
    const { statut } = this.userForm.value

    if (selectedUsers.length && this.checkStatutValue(statut)) {
      this.loading = true
      
      selectedUsers.map((user: UserItem) => {
        this.userService.upateUserProfileStatut(user.id, statut).pipe(first()).subscribe({
          next: () => this.onNext(user, statut),
          error: error => {
            this.error = true;
            this.loading = false;
          }
        });
      })
    }
  }

  private onNext (user: UserItem, statut: string) {
    user.profile.statut = statut
    user.selected = false
    this.loading = false
    this.selectedUsers = []
    this.allSelected = false
  }

  private checkStatutValue (statut: string) {
    return this.profileStatut.filter((object: UserStatut) => object.value === statut)[0]
  }
}
