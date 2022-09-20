import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true
  }
})

export class Profile extends Entity {

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;
  
  @property({
    type: 'string',
    required: false,
  })
  prenom: string;

  @property({
    type: 'string',
    required: false,
  })
  numeroCIN: string;

  @property({
    type: 'string',
    required: false,
  })
  statut: string;

  @property({
    type: 'string',
    required: false,
  })
  matricule: string;

  @property({
    type: 'string',
    required: false,
  })
  poste: string;

  @property({
    type: 'string',
    required: false,
  })
  numeroTelephoneN1: string;
//
  @property({
    type: 'string',
    required: false,
  })
  dateEmbauche: string;

  @property({
    type: 'string',
    required: false,
  })
  taillePull: string;

  @property({
    type: 'string',
    required: false,
  })
  situationFamiliale: string;

  @property({
    type: 'string',
    required: false,
  })
  nomConjoint: string;

  @property({
    type: 'string',
    required: false,
  })
  prenomConjoint: string;

  @property({
    type: 'string',
    required: false,
  })
  dateNaissanceConjoint: string;

  @property({
    type: 'string',
    required: false,
  })
  numeroTelephoneConjoint: string;

  @property({
    type: 'string',
    required: false,
  })
  nombreEnfant: string;

  @property({
    type: 'string',
    required: false,
  })
  proches: string;

  @property({
    type: 'string',
    required: false,
  })
  nombreProches: string;

  @property({
    type: 'string',
    required: false,
  })
  adressN1: string;

  @property({
    type: 'string',
    required: false,
  })
  villeN1: string;

  @property({
    type: 'string',
    required: false,
  })
  codePostalN1: string;

  @property({
    type: 'string',
    required: false,
  })
  adressN2: string;

  @property({
    type: 'string',
    required: false,
  })
  villeN2: string;

  @property({
    type: 'string',
    required: false,
  })
  codePostalN2: string;

  @property({
    type: 'string',
    required: false,
  })
  numeroTelephoneN2: string;

  @property({
    type: 'string',
    required: false,
  })
  permis: string;

  @property({
    type: 'string',
    required: false,
  })
  niveauEtude: string;

  @property({
    type: 'string',
    required: false,
  })
  niveauPrimaire: string;

  @property({
    type: 'string',
    required: false,
  })
  dateObtentionPrimaire: string;

  @property({
    type: 'string',
    required: false,
  })
  ecole: string;

  @property({
    type: 'string',
    required: false,
  })
  niveauSecondaire: string;

  @property({
    type: 'string',
    required: false,
  })
  dateObtentionSecondaire: string;

  @property({
    type: 'string',
    required: false,
  })
  lycee: string;

  @property({
    type: 'string',
    required: false,
  })
  niveauBac: string;

  @property({
    type: 'string',
    required: false,
  })
  dateObtentionBac: string;

  @property({
    type: 'string',
    required: false,
  })
  experiencePro: string;

  @property({
    type: 'string',
    required: false,
  })
  passeportSanitaire: string;

  @property({
    type: 'string',
    required: false,
  })
  antecedentMaladie: string;

  @property({
    type: 'string',
    required: false,
  })
  typeMaladie: string;

  @property({
    type: 'string',
    required: false,
  })
  activites: string;

  @property({
    type: 'string',
    required: false,
  })
  activitesExemple: string;

  @property({
    type: 'string',
  })
  userId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Profile>) {
    super(data);
  }
}

export interface ProfileRelations {
  // describe navigational properties here
}

export type ProfileWithRelations = Profile & ProfileRelations;
