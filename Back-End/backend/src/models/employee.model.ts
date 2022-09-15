import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Employee extends Entity {
  // Define well-known properties here
  @property({
    type: 'string',
    id: true,
    generated: true,
    required: false
  })
  id?: string;

  @property({
    type: 'string',
    required: false,
  })
  Name: string;

  @property({
    type: 'string',
    required: false,
  })
  Prenom: string;

  @property({
    type: 'string',
    required: false,
  })
  NumeroCIN: string;

  @property({
    type: 'string',
    required: false,
  })
  Statut: string;

  @property({
    type: 'string',
    required: false,
  })
  Matricule: string;

  @property({
    type: 'string',
    required: false,
  })
  Poste: string;

  @property({
    type: 'string',
    required: false,
  })
  NumeroTelephoneN1: string;
//
  @property({
    type: 'string',
    required: false,
  })
  DateEmbauche: string;

  @property({
    type: 'string',
    required: false,
  })
  TaillePull: string;

  @property({
    type: 'string',
    required: false,
  })
  SituationFamiliale: string;

  @property({
    type: 'string',
    required: false,
  })
  NomConjoint: string;

  @property({
    type: 'string',
    required: false,
  })
  PrenomConjoint: string;

  @property({
    type: 'string',
    required: false,
  })
  DateNaissanceConjoint: string;

  @property({
    type: 'string',
    required: false,
  })
  NumeroTelephoneConjoint: string;

  @property({
    type: 'string',
    required: false,
  })
  NombreEnfant: string;

  @property({
    type: 'string',
    required: false,
  })
  Proches: string;

  @property({
    type: 'string',
    required: false,
  })
  NombreProches: string;

  @property({
    type: 'string',
    required: false,
  })
  AdressN1: string;

  @property({
    type: 'string',
    required: false,
  })
  VilleN1: string;

  @property({
    type: 'string',
    required: false,
  })
  CodePostalN1: string;

  @property({
    type: 'string',
    required: false,
  })
  AdressN2: string;

  @property({
    type: 'string',
    required: false,
  })
  VilleN2: string;

  @property({
    type: 'string',
    required: false,
  })
  CodePostalN2: string;

  @property({
    type: 'string',
    required: false,
  })
  Email: string;

  @property({
    type: 'string',
    required: false,
  })
  NumeroTelephoneN2: string;

  @property({
    type: 'string',
    required: false,
  })
  Permis: string;

  @property({
    type: 'string',
    required: false,
  })
  NiveauEtude: string;

  @property({
    type: 'string',
    required: false,
  })
  NiveauPrimaire: string;

  @property({
    type: 'string',
    required: false,
  })
  DateObtentionPrimaire: string;

  @property({
    type: 'string',
    required: false,
  })
  Ecole: string;

  @property({
    type: 'string',
    required: false,
  })
  NiveauSecondaire: string;

  @property({
    type: 'string',
    required: false,
  })
  DateObtentionSecondaire: string;

  @property({
    type: 'string',
    required: false,
  })
  Lycee: string;

  @property({
    type: 'string',
    required: false,
  })
  NiveauBac: string;

  @property({
    type: 'string',
    required: false,
  })
  DateObtentionBac: string;

  @property({
    type: 'string',
    required: false,
  })
  ExperiencePro: string;

  @property({
    type: 'string',
    required: true,
  })
  Role: string;

  @property({
    type: 'string',
    required: true,
  })
  UserId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;


  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // describe navigational properties here
}

export type EmployeeWithRelations = Employee & EmployeeRelations;