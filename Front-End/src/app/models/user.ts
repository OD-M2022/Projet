import { Role } from "./role";

export const USER_ROLES: Role[] = [Role.User, Role.Admin]
export const USER_TAILLES_PULL: string[] = ['S', 'M', 'L', 'XL', 'XXL']
export const USER_SITUATIONS_FAMILIALE: string[] = ['Célibataire', 'Marié(e)', 'Divorcé(e)', 'Séparé(e)', 'Veuf(ve)']
export const USER_NOMBRRE_PROCHES: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
export const USER_TYPES_MALADIES: string[] = ['Maladie chronique', 'Maladie osseuse', 'Autres']
export const USER_NIVEAU_ETUDES: string[] = ['Primaire', 'Niveau Bac', 'BTS', 'BTP', 'Bac+1', 'Bac+2', 'Bac+3', 'Bac+41', 'Bac+5']
export const USER_PROFILE_STATUT: UserStatut[] = [
  {value: 'CREATED', name: 'En Attente'},
  {value: 'UPDATED', name: 'Modifié'},
  {value: 'VALIDATED', name: 'Validé'},
  {value: 'FINISHED', name: 'Terminé'}
]

export class UserStatut {
  value: string
  name: string
}

export class User {
  id: string
  email: string
  password?: string
  role: Role
  token?: string
}

export class UserItem implements User{
  constructor (
    public id: User['id'],
    public email: User["email"],
    public role: Role,
    public profile: UserProfile,
    public selected?: boolean
  ){}
}

export class UserProfile {
  id?: string
  nom: string
  prenom: string
  numeroCIN: string
  statut: string
  matricule: string
  poste: string
  numeroTelephoneN1: string
  dateEmbauche: string
  taillePull: string
  situationFamiliale: string
  nomConjoint: string
  prenomConjoint: string
  dateNaissanceConjoint: string
  numeroTelephoneConjoint: string
  nombreEnfant: string
  proches: string
  nombreProches: string
  adressN1: string
  villeN1: string
  codePostalN1: string
  adressN2: string
  villeN2: string
  codePostalN2: string
  numeroTelephoneN2: string
  permis: string
  niveauEtude: string
  niveauPrimaire: string
  dateObtentionPrimaire: string
  ecole: string
  niveauSecondaire: string
  dateObtentionSecondaire: string
  lycee: string
  niveauBac: string
  dateObtentionBac: string
  experiencePro: string
  userId?: string
}
