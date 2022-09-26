import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/Services/user.service';
import { first } from 'rxjs';
import { USER_PROFILE_STATUT, UserItem, UserStatut, UserProfile } from 'src/app/models/user';
import { Role } from 'src/app/models/role';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-all',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})

export class AllUsersComponent implements OnInit {
  modalRef?: BsModalRef
  modalContent: UserProfile
  userForm: FormGroup;
  users: UserItem[] = []
  profileStatut: Object[] = USER_PROFILE_STATUT
  statutValidattion: Object[] = [USER_PROFILE_STATUT[1], USER_PROFILE_STATUT[2]]
  filterStatut: string = ''
  allSelected: boolean = false
  selectedUsers: UserItem[] = []
  loading: boolean = false
  error: boolean = false

  constructor(public fb: FormBuilder, private userService: UserService,  public router: Router, private modalService: BsModalService) {
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
        let editedFields: any = user.profile.editedFields

        if (editedFields) {
          editedFields = JSON.parse(editedFields)
          for (const key in editedFields) {
            user.profile[key] = editedFields[key]
          }
        }
        
        user.profile.editedFields = ''
        user.profile.statut = statut

        this.userService.updateProfile(user.id, user.profile).pipe(first()).subscribe({
          next: () => this.onNext(user, statut),
          error: error => {
            this.error = true;
            this.loading = false;
          }
        });
      })
    }
  }

  openModal(template: TemplateRef<any>, user: UserItem) {

    if (user.profile.statut !== 'CREATED' || !user.profile.editedFields || user.profile.editedFields === '') {
      return false
    }

    const profile = user.profile
    let editedFields = profile.editedFields
    if (editedFields) {
      editedFields = JSON.parse(editedFields)
    }

    this.modalContent = {...user.profile, editedFields: editedFields}
    this.modalRef = this.modalService.show(template);
  }

  editProfile (user: UserItem) {
    if (user.profile.statut === 'ARCHIVATED') {
      return false
    }

    this.router.navigate([`users/edit/${user.id}`]);
  }

  private onNext (user: UserItem, statut: string) {
    setTimeout(() => {
      user.profile.statut = statut
      user.selected = false
      this.loading = false
      this.selectedUsers = []
      this.allSelected = false
    }, 1000)
  }

  private checkStatutValue (statut: string) {
    return this.profileStatut.filter((object: UserStatut) => object.value === statut)[0]
  }
}
