import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User, USER_TAILLES_PULL, USER_SITUATIONS_FAMILIALE, USER_NOMBRRE_PROCHES, USER_TYPES_MALADIES, USER_NIVEAU_ETUDES, USER_ROLES, UserProfile, USER_PROFILE_STATUT } from 'src/app/models/user';
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
      taillePull: ['', Validators.required],
      situationFamiliale: ['', Validators.required],
      nomConjoint: ['', Validators.required],
      prenomConjoint: ['', Validators.required],
      dateNaissanceConjoint: ['', Validators.required],
      numeroTelephoneConjoint: ['', Validators.required],
      proches: ['', Validators.required],
      nombreProches: ['', Validators.required],
      adressN1: ['', Validators.required],
      villeN1: ['', Validators.required],
      codePostalN1: ['', Validators.required],
      adressN2: ['', Validators.required],
      villeN2: ['', Validators.required],
      codePostalN2: ['', Validators.required],
      numeroTelephoneN1: ['', Validators.required],
      numeroTelephoneN2: ['', Validators.required],
      passeportSanitaire: ['', Validators.required],
      antecedentMaladie: ['', Validators.required],
      typeMaladie: ['', Validators.required],
      activites: ['', Validators.required],
      activitesExemple: ['', Validators.required],
      niveauEtude: ['', Validators.required],
      statut: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id')||this.authService.userValue.id
    this.userService.getProfile(this.userId).pipe(first()).subscribe({
      next: (user: UserProfile) => {
        for (const key in user) {
          if (this.userForm.controls[key]) {
            this.userForm.controls[key].setValue(user[key])
            this.userForm.controls[key].markAsDirty()
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

    if (this.authService.userValue.role === Role.User) {
      this.userForm.controls['statut'].setValue('UPDATED')
    }

    this.userService.updateProfile(this.userId, this.userForm.value).pipe(first()).subscribe({
      next: (userProfile: UserProfile) => console.log(userProfile),
      error: error => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
