import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { USER_TAILLES_PULL, USER_SITUATIONS_FAMILIALE, USER_NOMBRRE_PROCHES, USER_TYPES_MALADIES, USER_NIVEAU_ETUDES, USER_ROLES, UserProfile, USER_PROFILE_STATUT } from 'src/app/models/user';
import { Role } from 'src/app/models/role';
import { UserService } from 'src/Services/user.service';
import { first } from 'rxjs';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  defaultForm: UserProfile
  userId: string
  roles: Role[] = USER_ROLES
  taillesPull: string[] = USER_TAILLES_PULL
  situationsFamiliale: string[] = USER_SITUATIONS_FAMILIALE
  nombreProches: string[] = USER_NOMBRRE_PROCHES
  typeMaladies: string[] = USER_TYPES_MALADIES
  niveauEtudes: string[] = USER_NIVEAU_ETUDES
  profileStatut: Object[] = USER_PROFILE_STATUT
  loading = false;
  submitted = false;
  error: boolean = false;
  result: boolean = false

  constructor(public fb: FormBuilder, private userService: UserService, private route: ActivatedRoute, public authService: AuthService) {
    this.userForm = this.fb.group({
      matricule: ['', Validators.required],
      numeroCIN: ['', Validators.required],
      poste: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateEmbauche: ['', Validators.required],
      taillePull: [''],
      situationFamiliale: [''],
      nomConjoint: [''],
      prenomConjoint: [''],
      dateNaissanceConjoint: [''],
      numeroTelephoneConjoint: [''],
      proches: [''],
      nombreProches: [''],
      adressN1: [''],
      villeN1: [''],
      codePostalN1: [''],
      adressN2: [''],
      villeN2: [''],
      codePostalN2: [''],
      numeroTelephoneN1: [''],
      numeroTelephoneN2: [''],
      passeportSanitaire: [''],
      antecedentMaladie: [''],
      typeMaladie: [''],
      activites: [''],
      activitesExemple: [''],
      niveauEtude: [''],
      statut: [''],
    });
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id')||this.authService.userValue.id
    this.userService.getProfile(this.userId).pipe(first()).subscribe({
      next: (user: UserProfile) => {
        this.defaultForm = user
        const editedFields = this.defaultForm.editedFields
        console.log(editedFields)
        // this.editedFields = JSON.parse(this.defaultForm['editedFields'])
          for (const key in user) {
            if (this.userForm.controls[key]) {
              this.userForm.controls[key].setValue(user[key])
              this.userForm.controls[key].markAsDirty()
              if (editedFields) {
                if (JSON.parse(editedFields)[key]) {
                  this.userForm.controls[key].disable()
                }
              }
            }
          }
      },
      error: error => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  onSubmit() {
    // stop here if form is invalid
    this.submitted = true;

    if (this.userForm.invalid) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    this.loading = true;

    const editedFields: any = {}
    let defaultEditedFields: any = {}

    if (this.defaultForm.editedFields && this.defaultForm.editedFields !== '') { 
      defaultEditedFields = JSON.parse(this.defaultForm.editedFields)
    }

    for (const key in this.userForm.controls) {
      const field = this.userForm.controls[key]
      if (field.value !== this.defaultForm[key]) {
        editedFields[key] = field.value
      }
    }

    defaultEditedFields = {...defaultEditedFields, ...editedFields}

    this.userService.upateEditedFields(this.userId, JSON.stringify(defaultEditedFields), 'CREATED').pipe(first()).subscribe({
      next: (userProfile: UserProfile) => {
        for (const key in defaultEditedFields) {
          if (this.userForm.controls[key]) {
            this.userForm.controls[key].setValue(this.defaultForm[key])
            this.userForm.controls[key].disable()
            this.defaultForm.editedFields = defaultEditedFields
          }
        }
        this.result = true
        this.loading = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: error => {
        this.error = true;
        this.loading = false;
      }
    })
  }
}
