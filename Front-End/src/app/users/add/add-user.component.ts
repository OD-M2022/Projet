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
      statut: ['CREATED', Validators.required],
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
      next: (userProfile: UserProfile) => console.log(userProfile),
      error: error => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
