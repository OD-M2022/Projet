import { HistoriqueFormation } from "./HistoriqueFormation";

export  class Employee{
//Informations personnelles
  _id: string;
  UserId:string;
  Role:string;
  MAJ:Boolean
  Matricule: string
  NumeroCIN: string
  Poste: string
  Name:string
  Prenom: string
  DateEmbauche:Date

  //Tenue de travail
  TaillePull: string

  //Situation Familiale
  SituationFamiliale: string
  NomConjoint: string
  PrenomConjoint: string
  DateNaissanceConjoint:Date
  NumeroTelephoneConjoint:string
  NombreEnfant:number

  ListeEnfants: string[]
  NomEnfant:string
  PrenomEnfant:string
  HandicapeEnfant:string
  Sexe:string
  DateNaissanceEnfant:Date
  NiveauEtudeEnfant:string

  //Lien de parenté
  Proches : string
  NombreProches:number

  ListeLiensParentes:string[]
  NomParent:string
  PrenomParent:string
  PosteParent:string
  Siege:string

  //coordonnées
  AdressN1:string
  VilleN1:string
  CodePostalN1:string
  AdressN2:string
  VilleN2:string
  CodePostalN2:string
  Email:string
  NumeroTelephoneN1:string
  NumeroTelephoneN2:string

  Urgence:string[]
  NomContactUrg:string
  PrenomContactUrg:string
  NumeroTelephoneContactUrg1:string
  NumeroTelephoneContactUrg2:string
  EmailContactEmail:string

  Permis:string

  //Santé
  PasseportSanitaire:string
  AntecedentMaladie:string
  TypeMaladie:string

  //Autres activités
  Activites:string
  ActivitesExemple:string

  //Mon CV
  NiveauEtude:string
  NiveauPrimaire:string
  DateObtentionPrimaire:Date
  Ecole:string
  NiveauSecondaire:string
  DateObtentionSecondaire:Date
  Lycee:string
  NiveauBac:string
  DateObtentionBac:Date


  Diplôme:string[]
  SpecialiteDiplôme:string
  DomaineSpecialite:string
  NiveauEtudeDiplôme:string
  DateObtientionDiplôme:Date


  ExperiencePro:string

  Emploi:string[]
  TypeEmploiPro:string
  PostePro:string
  DateDebutPostePro:Date
  DateFinPostePro:Date
  ServicePro:string
  Entreprise:string
  Lieu:string


  //Historique
  HistoriquePoste:string[]
  PosteHisto:string
  LieuTravail:string
  Site:string
  Direction:string
  Departement:string
  DateDebutPoste:Date
  DateFinPoste:Date

  historiqueFormation:HistoriqueFormation[]
}
