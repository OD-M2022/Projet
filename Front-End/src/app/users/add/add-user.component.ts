import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User, USER_TAILLES_PULL, USER_SITUATIONS_FAMILIALE, USER_NOMBRRE_PROCHES, USER_TYPES_MALADIES, USER_NIVEAU_ETUDES, USER_ROLES, UserProfile } from 'src/app/models/user';
import { Role } from 'src/app/models/role';
import { UserService } from 'src/Services/user.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-user-add',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  user: User
  roles: Role[] = USER_ROLES
  taillesPull: string[] = USER_TAILLES_PULL
  situationsFamiliale: string[] = USER_SITUATIONS_FAMILIALE
  nombreProches: string[] = USER_NOMBRRE_PROCHES
  typeMaladies: string[] = USER_TYPES_MALADIES
  niveauEtudes: string[] = USER_NIVEAU_ETUDES
  loading = false;
  submitted = false;
  error: boolean = false;
  result: boolean = false

  constructor(public fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      role: ['', Validators.required],
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
      statut: ['CREATED'],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // stop here if form is invalid
    this.submitted = true;

    if (this.userForm.invalid) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    this.loading = true;

    this.userService.signUp(this.userForm.value).pipe(first()).subscribe({
      next: (user: User) => this.createUserProfile(user, this.userForm.value),
      error: error => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  private createUserProfile (user: User, formValue: UserProfile) {
    const userProfile: UserProfile = this.userService.getwithoutCredentials(formValue)

    this.userService.createUserProfile(user, userProfile).pipe(first()).subscribe({
      next: (userProfile: UserProfile) => {
        this.result = true
        this.loading = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: error => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
